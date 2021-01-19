import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import CriteriaService from '../../Services/CriteriaService';
import IsAdminChecker from '../../Services/IsAdminChecker';
import VoucherService from '../../Services/VoucherService';

class AddVoucherCriteriaComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            criterias:[],
            vouchers:[],
            selectedCriteria:'',
            selectedVoucher:''
        }

        this.changeCriteriaHandler=this.changeCriteriaHandler.bind(this)
        this.changeVoucherHandler=this.changeVoucherHandler.bind(this)
        
        

    }
    changeCriteriaHandler=(e)=>{
        this.setState({selectedCriteria:e.target.value})
        console.log(e.target.value);
    }
    changeVoucherHandler=(e)=>{
        this.setState({selectedVoucher:e.target.value})
        console.log(e.target.value);
    }
    componentDidMount(){
        
        if(!IsAdminChecker.isAdmin())
        this.props.history.push('/home')
        VoucherService.getVouchers().then((res)=>{
            this.setState({vouchers:res.data})
        })

        CriteriaService.getCriterias().then((res)=>{
            this.setState({criterias:res.data})
        })
    }
    saveVoucherCriteriaHandler=(e)=>{
        e.preventDefault();
        VoucherService.addVoucherCriteria(this.state.selectedVoucher,this.state.selectedCriteria).then((res)=>{
           this.props.history.push('/vouchers/show/'+this.state.selectedVoucher)    
        })
    }

    cancelCreate=(e)=>{
        this.props.history.push('/vouchers')
    }
    render() {
        return (
            <div>
                <h2>Create Voucher</h2>
                <div>
                <form>
                <div className="mb-3">
                        <label  className="form-label">Criteria</label>
                        <select onChange={this.changeCriteriaHandler} className="form-control">
                        <option key="0" ></option>
                        {
                                this.state.criterias.map(
                                    criteria =>
                                    <option key={criteria.Id} value={criteria.Id}>{criteria.name}</option>
                                   
                                )
                            }
                        
                        </select>
                        
                      
                    </div>
                    
                    <div className="mb-3">
                        <label  className="form-label">Voucher</label>
                        <select onChange={this.changeVoucherHandler} className="form-control">
                        <option key="0" ></option>
                        {
                                this.state.vouchers.map(
                                    voucher =>
                                    <option key={voucher.Id} value={voucher.Id}>{voucher.title}</option>
                                   
                                )
                            }
                        
                        </select>
                        
                      
                    </div>

                    <button  onClick={this.saveVoucherCriteriaHandler} className="btn btn-primary">Submit</button>
                    <button onClick={this.cancelCreate} className="btn btn-danger">Cancel</button>
                </form>
                </div>
            </div>
        );
    }
}

export default AddVoucherCriteriaComponent;