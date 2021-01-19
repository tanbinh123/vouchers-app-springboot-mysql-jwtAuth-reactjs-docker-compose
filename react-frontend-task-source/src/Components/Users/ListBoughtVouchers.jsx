import React, { Component } from 'react';
import IsUserChecker from '../../Services/IsUserChecker';
import UserService from '../../Services/UserService';
class ListBoughtVouchers extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            vouchers:[]
        }
    }

    componentDidMount(){
        
        if(!IsUserChecker.isUser())
        this.props.history.push('/home')
        //calling service
        UserService.purchasedVouchers().then((res)=>{
            this.setState({vouchers:res.data})
        })
    }

    render() {
        return (
            <div>
               <h2 className="text-center">Purchased Vouchers </h2>
             <div className="row">
                   <table className="table table-striped table-bordered">
                           <thead>
                          <tr>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Points</th>
                           <th>Type</th>
                           <th>Level</th>
                           <th>Merchant</th>
                          


                           </tr>

                       </thead>
                       <tbody>
                           {
                               this.state.vouchers.map(
                                   voucher =>
                                   <tr key={voucher.Id} >
                                    <td>{voucher.title}</td>  
                                    <td>{voucher.description}</td>
                                    <td>{voucher.points}</td>
                                    <td>{voucher.type}</td>
                                    <td>
                                        {(voucher.Criterias!=undefined &&voucher.Criterias!=null &&voucher.Criterias.length>0 && voucher.Criterias[0].name) || "Ordinary"}
                                        </td>
                                    <td>{voucher.merchant.name}</td>
                                   
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

export default ListBoughtVouchers;