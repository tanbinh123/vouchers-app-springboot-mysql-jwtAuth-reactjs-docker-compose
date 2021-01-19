import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import IsAdminChecker from '../../Services/IsAdminChecker';
import MerchantService from '../../Services/MerchantService';
class CreateMerchantComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.saveMerchant=this.saveMerchant.bind(this);
        this.cancelCreate=this.cancelCreate.bind(this);

    }
    componentDidMount(){
        
        if(!IsAdminChecker.isAdmin())
        this.props.history.push('/home')
    }
    changeNameHandler=(e)=>{
        this.setState({name:e.target.value})
    }
    saveMerchant=(e)=>{
        e.preventDefault();
        let merchant={name:this.state.name}
        
        MerchantService.saveMerchant(merchant).then((res)=>{
            this.props.history.push('/merchants')
        });
        

    }
    cancelCreate=(e)=>{
        this.props.history.push('/merchants')
    }
    render() {
        return (
            <div>
                <h2>Create Merchant</h2>
                <div>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Merchant Name</label>
                        <input type="text" value={this.state.name} onChange={this.changeNameHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      
                    </div>
                   

                    <button  onClick={this.saveMerchant} className="btn btn-primary">Submit</button>
                    <button onClick={this.cancelCreate} className="btn btn-danger">Cancel</button>
                </form>
                </div>
            </div>
        );
    }
}

export default CreateMerchantComponent;