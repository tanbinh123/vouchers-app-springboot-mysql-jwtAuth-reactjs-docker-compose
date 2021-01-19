import React, { Component } from 'react';
import IsAdminChecker from '../../Services/IsAdminChecker';
import MerchantService from '../../Services/MerchantService';

class ListMerchants extends Component {
    constructor(props){
        super(props)

        this.state={
            merchants:[]
        }
        this.newMerchant=this.newMerchant.bind(this);
    }
    componentDidMount(){
        
        if(!IsAdminChecker.isAdmin())
        this.props.history.push('/home')
        MerchantService.getMerchants().then((res)=>{
            this.setState({merchants:res.data});
            
        });
    }
    newMerchant(){
        this.props.history.push('/merchants/add-new-merchant')
    }
    render() {
        return (
            <div>
                <div className="row">
                   
                    
                </div>
                <h2 className="text-center">Merchants  <button className="btn btn-primary" onClick={this.newMerchant}>Add Merchant</button></h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                            <thead>
                           <tr key="start">
                           
                            <th>Name</th>
                            
                            </tr>
 
                        </thead>
                        <tbody>
                            {
                                this.state.merchants.map(
                                    merchant =>
                                    <tr key={merchant.Id} >
                                     
                                     <td>{merchant.name}</td>   
                                     
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListMerchants;