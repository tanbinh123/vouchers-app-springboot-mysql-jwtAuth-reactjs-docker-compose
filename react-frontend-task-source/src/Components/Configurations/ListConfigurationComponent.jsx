import React, { Component } from 'react';
import ConfigurationService from '../../Services/ConfigurationService';

class ListConfigurationComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            configurations:[]
        }
        this.newConfig=this.newConfig.bind(this)
    }

    componentDidMount(){
        ConfigurationService.getConfiguratios().then((res)=>{
            this.setState({configurations:res.data})
        })

    }
    newConfig(){
        this.props.history.push('/configurations/add-new-configuration')
    }
    render() {
        return (
            <div>
                   <h2 className="text-center">Configurations  <button className="btn btn-primary" onClick={this.newConfig}>Add New</button></h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                            <thead>
                           <tr>
                           
                            <th>Key</th>
                            <th>Value</th>
                            </tr>
 
                        </thead>
                        <tbody>
                            {
                                this.state.configurations.map(
                                    configuration =>
                                    <tr key={configuration.Id} >
                                     
                                     <td>{configuration.configkey}</td>
                                     <td>{configuration.configvalue}</td>
                                     
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

export default ListConfigurationComponent;