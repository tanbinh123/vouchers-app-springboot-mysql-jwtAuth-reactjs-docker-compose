import React, { Component } from 'react';
import CriteriaService from '../../Services/CriteriaService';
import IsAdminChecker from '../../Services/IsAdminChecker';

class ListCriteriasComponent extends Component {
    constructor(props)
    {
        super(props)
        
        this.state={
            criterias:[]
        }
        this.newCriteria=this.newCriteria.bind(this);
    }

    componentDidMount(){
        if(!IsAdminChecker.isAdmin())
            this.props.history.push('/home')
       
        CriteriaService.getCriterias().then((res)=>{
            this.setState({criterias:res.data})
        })
    }
    newCriteria(){
        this.props.history.push('/criterias/add-new-criteria')
    }
    render() {
        return (
            <div>
                <div className="row">
                   
                    
                </div>
                <h2 className="text-center">Criterias  <button className="btn btn-primary" onClick={this.newCriteria}>Add Criteria</button></h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                            <thead>
                           <tr key="start">
                           
                            <th>Name</th>
                            
                            </tr>
 
                        </thead>
                        <tbody>
                            {
                                this.state.criterias.map(
                                    criteria =>
                                    <tr key={criteria.Id} >
                                     
                                     <td>{criteria.name}</td>   
                                     
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

export default ListCriteriasComponent;