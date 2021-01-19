import React, { Component } from 'react';
import CriteriaService from '../../Services/CriteriaService';
import IsAdminChecker from '../../Services/IsAdminChecker';

class AddCriteriaComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.saveCriteria=this.saveCriteria.bind(this);
        this.cancelCreate=this.cancelCreate.bind(this);
    }
    componentDidMount(){
        
        if(!IsAdminChecker.isAdmin())
        this.props.history.push('/home')
    }
    changeNameHandler=(e)=>{
        this.setState({name:e.target.value})
    }
    saveCriteria=(e)=>{
        e.preventDefault();
        let criteria={name:this.state.name}
        
        CriteriaService.saveCriteria(criteria).then((res)=>{
            this.props.history.push('/criterias')
        });
        

    }
    cancelCreate=(e)=>{
        this.props.history.push('/criterias')
    }
    

    render() {
        return (
            <div>
                <h2>Create Criteria</h2>
                <div>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Criteria Name</label>
                        <input type="text" required value={this.state.name} onChange={this.changeNameHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      
                    </div>
                   

                    <button  onClick={this.saveCriteria} className="btn btn-primary">Submit</button>
                    <button onClick={this.cancelCreate} className="btn btn-danger">Cancel</button>
                </form>
                </div>
            </div>
        );
    }
}

export default AddCriteriaComponent;