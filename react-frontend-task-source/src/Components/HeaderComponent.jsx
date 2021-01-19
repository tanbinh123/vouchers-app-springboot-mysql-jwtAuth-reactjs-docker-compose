import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
              
                <div className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" >Wasla Voucher</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to="/merchants">Merchants</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/vouchers">Vouchers</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/configurations">Configurations</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/user/list-available-vouchers">Available Vouchers</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" to="/user/list-purchased-vouchers">My Vouchers</NavLink>
        </li>

        
        
      </ul>
      
    </div>
  </div>
</div>

</div>
        );
    }
}

export default HeaderComponent;