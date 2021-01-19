import React, { Component } from 'react';
import VoucherService from '../../Services/VoucherService';
import {NavLink} from 'react-router-dom'
import MerchantService from '../../Services/MerchantService';
import IsAdminChecker from '../../Services/IsAdminChecker';
class ListVouchers extends Component {
    constructor(props){
        super(props)

        this.state={
            vouchers:[],
            merchants:[],
            type:'',
            title:'',
            description:'',
            merchantid:0

        }
        this.newVoucher=this.newVoucher.bind(this);
        this.changeMerchantHandler=this.changeMerchantHandler.bind(this);
        this.changeTitleHandler=this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.resetFilters=this.resetFilters.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
    }
    
    resetFilters(){
        this.setState({type:''})
        this.setState({merchantid:''})
        this.setState({title:''})
        this.setState({description:''})
        VoucherService.getVouchers().then((res)=>{
            this.setState({vouchers:res.data});
            
        });
    }
    changeTypeHandler=(e)=>{
        this.setState({type:e.target.value},() => {
            console.log(this.state.type);
            let filters= this.setFilters()
             VoucherService.getVouchersWithFilters(filters).then((res)=>{
                 this.setState({vouchers:res.data});
             });
        })
       
    }
    changeTitleHandler=(e)=>{
        this.setState({title:e.target.value},() => {
            console.log(this.state.type);
            let filters= this.setFilters()
             VoucherService.getVouchersWithFilters(filters).then((res)=>{
                 this.setState({vouchers:res.data});
             });
        })
    }
    changeDescriptionHandler=(e)=>{
        this.setState({description:e.target.value},() => {
            console.log(this.state.type);
            let filters= this.setFilters()
             VoucherService.getVouchersWithFilters(filters).then((res)=>{
                 this.setState({vouchers:res.data});
             });
        })
    }

    setFilters(){
        console.log("inside filter "+this.state.type);
        let filters=''//"type="+this.state.type+"&merchantid="+this.state.merchantid
        if(this.state.type !=null && this.state.type !=undefined && this.state.type !='')
        filters="type="+this.state.type;
        if(filters.length>0)
        filters+="&";
        if(this.state.merchantid !=null && this.state.merchantid !=undefined && this.state.merchantid !='')
        filters+="merchant="+this.state.merchantid;
        if(filters.length>0)
        filters+="&";
        if(this.state.title !=null && this.state.title !=undefined && this.state.title !='')
            filters+="title="+this.state.title;
        if(filters.length>0)
            filters+="&";    
        if(this.state.description !=null && this.state.description !=undefined && this.state.description !='')
            filters+="description="+this.state.description;
        
        return filters;
    }
    changeMerchantHandler=(e)=>{
        
        this.setState({merchantid:e.target.value},() => {
            console.log(this.state.type);
            let filters= this.setFilters()
             VoucherService.getVouchersWithFilters(filters).then((res)=>{
                 this.setState({vouchers:res.data});
             });
        })
    }

    componentDidMount(){
        
        if(!IsAdminChecker.isAdmin())
        this.props.history.push('/home')
        VoucherService.getVouchers().then((res)=>{
            this.setState({vouchers:res.data});
            MerchantService.getMerchants().then((res)=>{
                this.setState({merchants:res.data});
                
            });
            
        });
        
    }
    newVoucher(){
        this.props.history.push('/vouchers/add-new-voucher')
    }
    render() {
        return (
            
         
<div>

    <div className="row">
               
                
                <div className="row">
                <div className="col-md-3"> Filter By</div>
                    <div className="col-md-3"> 
                    Type  <select className="form-control"  value={this.state.type} onChange={this.changeTypeHandler}>
                    <option  value=""></option>
                        <option  value="discount">Discount</option>
                        <option value="gift">Gift</option>
                        
                        </select></div>
                    <div className="col-md-3 "> 
                    Merchant   <select className="form-control" value={this.state.merchantid} onChange={this.changeMerchantHandler} >
                    <option ></option>
                        {
                                this.state.merchants.map(
                                    merchant =>
                                    <option  key={merchant.Id} value={merchant.Id}>{merchant.name}</option>
                                   
                                )
                            }
                        
                        </select></div>
                    
                
                
                </div>
                
                <div className="row">
                <div className="col-md-3"> Search By</div>
                <div className="col-md-3"> 
                Title  <input className="form-control" type="text" onChange={this.changeTitleHandler} value={this.state.title}/>
                       </div>
                    <div className="col-md-3"> 
                    Description  <input className="form-control"type="text" onChange={this.changeDescriptionHandler} value={this.state.description}/>
                       </div>
                </div>
                <div className="row" >
                    <div className="col-md-2">
                    <button className="btn btn-danger form-control" onClick={this.resetFilters}>Reset</button>
                    </div>
                
                </div>
                    
                
                <h2 className="text-center">Vouchers  <button className="btn btn-primary" onClick={this.newVoucher}>Add New</button></h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                            <thead>
                           <tr>
                           
                            <th>Title</th>
                            <th>Description</th>
                            <th>Points</th>
                            <th>Type</th>
                            <th>Limit</th>
                            <th>Merchant</th>
                            <th>Level</th>

                            </tr>
 
                        </thead>
                        <tbody>
                            {
                                this.state.vouchers.map(
                                    voucher =>
                                    <tr key={voucher.Id} >
                                     
                                     <td><NavLink className="nav-link" to={"/vouchers/show/"+voucher.Id}>{voucher.title}</NavLink></td>  
                                     <td>{voucher.description}</td>
                                     <td>{voucher.points}</td>
                                     <td>{voucher.type}</td>
                                     <td>{voucher.limit}</td>
                                     <td>{voucher.merchant.name}</td>
                                     <td>
                                        {(voucher.Criterias!=undefined &&voucher.Criterias!=null &&voucher.Criterias.length>0 && voucher.Criterias[0].name) || "Ordinary"}
                                        </td>
                                     
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

</div>
                
        );
    }
}

export default ListVouchers;