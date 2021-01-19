import React, { Component } from 'react';
import ConfigurationService from '../../Services/ConfigurationService';
class AddConfigurationComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            config_key:'',
            config_value:'',
            
        }
        this.changeConfigKeyHandler=this.changeConfigKeyHandler.bind(this);
        this.changeConfigValueHandler=this.changeConfigValueHandler.bind(this);
     

    }
   
    changeConfigKeyHandler=(e)=>{
        this.setState({config_key:e.target.value})
    }
    changeConfigValueHandler=(e)=>{
        this.setState({config_value:e.target.value})
    }
 
    cancelCreate=(e)=>{
        this.props.history.push('/configurations')
    }
    saveConfiguration=(e)=>{
        e.preventDefault();
        let config={key:this.state.config_key,value:this.state.config_value}
        
    console.log(config);
        ConfigurationService.saveConfiguration(config).then((res)=>{
            console.log(res);
           //console.log(res);
             this.props.history.push('/configurations')
        });
        

    }
    render() {
        return (
            <div>
                <h2>Create Configuration</h2>
                <div>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Key</label>
                        <input type="text" value={this.state.config_key} onChange={this.changeConfigKeyHandler} className="form-control" />
                      
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Value</label>
                        <input type="text" value={this.state.config_value} onChange={this.changeConfigValueHandler} className="form-control" />
                      
                    </div>

                    <button  onClick={this.saveConfiguration} className="btn btn-primary">Submit</button>
                    <button onClick={this.cancelCreate} className="btn btn-danger">Cancel</button>
                </form>
                </div>
            </div>
        );
    }
}

export default AddConfigurationComponent;