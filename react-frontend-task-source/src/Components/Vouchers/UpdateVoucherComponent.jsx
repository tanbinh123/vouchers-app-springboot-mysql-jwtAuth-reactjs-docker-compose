import React, { Component } from "react";
import IsAdminChecker from '../../Services/IsAdminChecker';
import MerchantService from '../../Services/MerchantService';
import VoucherService from '../../Services/VoucherService';
class UpdateVoucherComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            updatedVoucher:{},
            title:'',
            description:'',
            points:0,
            image:'/default.jpg',
            type:'',
            limit:0,
            merchantid:0,
            merchants:[],
            message:""
        }
        this.changeTitleHandler=this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changePointsHandler=this.changePointsHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.changeLimitHandler=this.changeLimitHandler.bind(this);
        this.changeMerchantHandler=this.changeMerchantHandler.bind(this);
        this.saveVoucher=this.saveVoucher.bind(this);
        this.cancelCreate=this.cancelCreate.bind(this);

    }
    componentDidMount(){
        
        if(!IsAdminChecker.isAdmin())
        this.props.history.push('/home')

        MerchantService.getMerchants().then((res)=>{
            
            this.setState({merchants:res.data});
        })
        VoucherService.getVoucherById(this.state.id).then((res)=>{
           this.setCurrentVoucherWithData(res.data);
           
        })
       
    }
    setCurrentVoucherWithData(data){
        
        this.setState({updatedVoucher:data});
        this.setState({title:this.state.updatedVoucher.title});
        this.setState({description:this.state.updatedVoucher.description});
        this.setState({points:this.state.updatedVoucher.points});
        this.setState({limit:this.state.updatedVoucher.limit});
        this.setState({type:this.state.updatedVoucher.type});
        this.setState({merchantid:this.state.updatedVoucher.merchant.Id});
        this.setState({image:this.state.updatedVoucher.image});
    }
    changeMerchantHandler=(e)=>{
        this.setState({merchantid:e.target.value})
    }
    changeTitleHandler=(e)=>{
        this.setState({title:e.target.value})
    }

    changeDescriptionHandler=(e)=>{
        this.setState({description:e.target.value})
    }
    changePointsHandler=(e)=>{
        this.setState({points:e.target.value})
    }
    changeTypeHandler=(e)=>{
        this.setState({type:e.target.value})
    }
    changeLimitHandler=(e)=>{
        this.setState({limit:e.target.value})
    }
    saveVoucher=(e)=>{
        
        e.preventDefault();
        if(this.state.title!=='' && this.state.description!=='' && this.state.merchantid>0 && this.state.type!=='' )
        {
            let voucher={title:this.state.title,description:this.state.description,
                points:this.state.points,limit:this.state.limit,type:this.state.type,
            merchantid:this.state.merchantid,image:this.state.image}
                
            //console.log(voucher);
                VoucherService.updateVoucher(this.state.id,voucher).then((res)=>{
                   //console.log(res);
                     this.props.history.push('/vouchers/show/'+this.state.id)
                });
                
        }else
        {
            this.setState({message:"All fields are required!"})
        }

        

    }
    cancelCreate=(e)=>{
        this.props.history.push('/vouchers/show/'+this.state.id)
    }
    render() {
        return (
            <div>
                <h2>Create Voucher</h2>
                <div>
                <form>
                <div className="row">
                    <div className="col-md-6">
                        <label  className="form-label">Voucher Title</label>
                        <input type="text" value={this.state.title} onChange={this.changeTitleHandler} className="form-control" />
                      
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Voucher Description</label>
                        <input type="text" value={this.state.description} onChange={this.changeDescriptionHandler} className="form-control" />
                      
                    </div>
                    </div>
                
                    <div className="row">
                    <div className="col-md-6">
                        <label  className="form-label">Points</label>
                        <input type="number" min="1"  value={this.state.points} onChange={this.changePointsHandler} className="form-control" />
                      
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Limit</label>
                        <input type="number" min="1"  value={this.state.limit} onChange={this.changeLimitHandler} className="form-control" />
                      
                    </div>


                    </div>
     
                    

                    <div className="row">

                    <div className="col-md-6">
                    <label  className="form-label">Merchant</label>
                    <select value={this.state.merchantid} onChange={this.changeMerchantHandler} className="form-control">
                    
                    {
                    this.state.merchants.map(
                    merchant =>
                    <option key={merchant.Id} value={merchant.Id}>{merchant.name}</option>

                    )
                    }

                    </select>


                    </div>

                    <div className="col-md-6">
                    <label  className="form-label">Type</label>
                    <select value={this.state.type} onChange={this.changeTypeHandler} className="form-control">
                    <option></option>
                    <option key="discount" value="discount">Discount</option>
                    <option key="gift" value="gift">Gift</option>

                    </select>


                    </div>

                    </div>


                    <div className="py-2"></div>
                    <div className="row">
                       <div className="col-md-1">
                       <button  onClick={this.saveVoucher} className="btn btn-primary">Update</button>
                    
                 
                       </div>

                       <div className="col-md-1">
                       
                     <button onClick={this.cancelCreate} className="btn btn-danger">Cancel</button>
                 
                       </div>

                     </div>
                    <div className="row">
                        {this.state.message!=='' && <div className="alert alert-danger" role="alert">
                        {this.state.message}
                                </div>}
                            
                    </div>


                </form>
                </div>
            </div>
        );
    }
}

export default UpdateVoucherComponent;