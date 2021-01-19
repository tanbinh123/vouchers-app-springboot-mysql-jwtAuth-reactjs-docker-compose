import React, { Component } from 'react';
import AuthService from '../../Services/auth.service';
import IsUserChecker from '../../Services/IsUserChecker';
import UserService from '../../Services/UserService';


class ListOfDeserviedVouchers extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            vouchers:[],
            userPoints:0
        }
        
    }
    componentDidMount(){
        
        if(!IsUserChecker.isUser())
        this.props.history.push('/home')

        //calling service
        UserService.getUserPoints().then((res)=>{
            this.setState({userPoints:res.data})
        })
        UserService.getDeservedVouchers().then((res)=>{
            
            this.setState({vouchers:res.data})
        })
    }
    BuyNowHandler=(e)=>{
       
        UserService.buyVouchers(e.target.value).then((res)=>{
            console.log(res.data);
            this.props.history.push('/user/list-purchased-vouchers')
        });
    }
    render() {
        return (
            <div>
               <h2 className="text-center">Vouchers </h2>
             <div className="row">
                   <table className="table table-striped table-bordered">
                           <thead>
                          <tr>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Points</th>
                           <th>Type</th>
                           <th>Merchant</th>
                           <th>Level</th>
                           <th>Action</th>


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
                                    <td>{voucher.merchant.name}</td>
                                    <td>
                                        {(voucher.Criterias!=undefined &&voucher.Criterias!=null &&voucher.Criterias.length>0 && voucher.Criterias[0].name) || "Ordinary"}
                                        </td>
                                    <td>
                                        {(this.state.userPoints>=voucher.points && voucher.limit>0 && <button value={voucher.Id} className="btn btn-primary" onClick={this.BuyNowHandler}>Buy Now</button>) || <small>No Enough Points</small>}
                                        
                                        </td>
                                    
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

export default ListOfDeserviedVouchers;