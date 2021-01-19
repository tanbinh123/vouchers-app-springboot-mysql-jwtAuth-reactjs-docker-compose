import React, { Component } from 'react';
import IsAdminChecker from '../../Services/IsAdminChecker';
import VoucherService from '../../Services/VoucherService';

class ShowVoucher extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            voucher:''
        }
        this.newVoucher=this.newVoucher.bind(this);
        this.updateVoucher=this.updateVoucher.bind(this);
        this.deleteVoucher=this.deleteVoucher.bind(this);
    }
    componentDidMount(){
        
        if(!IsAdminChecker.isAdmin())
        this.props.history.push('/home')


        VoucherService.getVoucherById(this.state.id).then((res)=>{
            this.setState({voucher:res.data});
            
        });
    }
    newVoucher(){
        this.props.history.push('/vouchers/add-new-voucher')
    }
    updateVoucher(){
        this.props.history.push('/vouchers/update/'+this.state.id)
    }
    deleteVoucher(){
        VoucherService.deleteVoucher(this.state.id).then((res)=>{
            this.props.history.push('/vouchers');
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                    <button className="btn btn-primary" onClick={this.newVoucher}>Add Voucher</button>
                    
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-info" onClick={this.updateVoucher}>Update</button>
                    
                    </div>
                    <div className="col-md-2">
                    <button className="btn btn-danger" onClick={this.deleteVoucher}>Delete</button>
                    
                    </div>

                    
                    
                  
                </div>
                <h2 className="text-center">Voucher with Id -{this.state.id}-</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                            <thead>
                           <tr>
                           
                            <th>Title</th>
                            <th>Description</th>
                            <th>Points</th>
                            <th>Type</th>
                            <th>Limit</th>
                            <th>Level</th>
                            
                            </tr>
 
                        </thead>
                        <tbody>
                           
                               
                                   
                                    <tr key={this.state.voucher.Id} >
                                     
                                     <td>{this.state.voucher.title}</td>  
                                     <td>{this.state.voucher.description}</td>
                                     <td>{this.state.voucher.points}</td>
                                     <td>{this.state.voucher.type}</td>
                                     <td>{this.state.voucher.limit}</td>
                                     <td>
                                        {(this.state.voucher.Criterias!=undefined &&this.state.voucher.Criterias!=null &&this.state.voucher.Criterias.length>0 && this.state.voucher.Criterias[0].name) || "Ordinary"}
                                        </td>
                                    
                                    </tr>
                                
                           
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ShowVoucher;