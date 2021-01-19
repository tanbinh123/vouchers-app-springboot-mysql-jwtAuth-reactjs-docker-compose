import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./Services/auth.service";

import Login from "./Components/Auth/login.component";
import Register from "./Components/Auth/register.component";
import Home from "./Components/Auth/home.component";
import Profile from "./Components/Auth/profile.component";
import BoardUser from "./Components/Auth/board-user.component";
import BoardModerator from "./Components/Auth/board-moderator.component";
import BoardAdmin from "./Components/Auth/board-admin.component";
import ListMerchants from "./Components/Merchants/ListMerchants"
import ListVouchers from "./Components/Vouchers/ListVouchers"
import CreateMerchantComponent from './Components/Merchants/CreateMerchantComponent';
import CreateVoucherComponent from './Components/Vouchers/CreateVoucherComponent';
import ShowVoucher from './Components/Vouchers/ShowVoucherComponent';
import UpdateVoucherComponent from './Components/Vouchers/UpdateVoucherComponent';
import ListConfigurationComponent from './Components/Configurations/ListConfigurationComponent';
import AddConfigurationComponent from './Components/Configurations/AddConfigurationComponent';
import ListOfDeserviedVouchers from './Components/Users/ListOfDeserviedVouchers';
import ListBoughtVouchers from './Components/Users/ListBoughtVouchers';
import ListCriteriasComponent from "./Components/Criterias/ListCriteriasComponent";
import AddCriteriaComponent from "./Components/Criterias/AddCriteriaComponent";
import AddVoucherCriteriaComponent from "./Components/Vouchers/AddVoucherCriteriaComponent";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      showUserBoard:false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showUserBoard:user.roles.includes("ROLE_USER"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showUserBoard, showAdminBoard } = this.state;

    return (
  
  <div>
        <nav className={showAdminBoard==true?"navbar navbar-expand navbar-dark bg-dark":"navbar navbar-expand navbar-light bg-light"}>
          <Link to={"/"} className="navbar-brand">
            Wasla Vouchers
          </Link>
          <div className="navbar-nav mr-auto">
          {(showAdminBoard || showUserBoard) && <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          
      {showAdminBoard && (
              <li >
                <Link to={"/merchants"} className="dropdown-item">
                  Merchants
                </Link>
              </li>
            )}
      {showAdminBoard && (
              <li >
               <Link  to="/vouchers" className="dropdown-item">Vouchers</Link>
              </li>
            )}
       {showAdminBoard && (
              <li >
               <Link  to="/configurations" className="dropdown-item">Configurations</Link>
              </li>
            )}

        {showAdminBoard && (
                    <li >
                      <Link  to="/criterias" className="dropdown-item">Criterias</Link>
                    </li>
                  )}
{showAdminBoard && (
                    <li >
                      <Link  to="/vouchers/add-criteria-to-voucher" className="dropdown-item">Assign Criteria</Link>
                    </li>
                  )}

{showAdminBoard && (
                    <li >
                      <a className="dropdown-item" href="http://localhost:8080/v2/api-docs" target="blank">Api Docs</a>
                    </li>
                  )}


        {showUserBoard && (
              <li>
               <Link  className="dropdown-item" to="/user/list-available-vouchers">Available Vouchers</Link>
              </li>
            )}
          {showUserBoard && (
              <li>
               <Link className="dropdown-item" to="/user/list-purchased-vouchers">My Vouchers</Link>
              </li>
            )}

</ul>
        </li>}

          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" exact component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/merchants" exact component={ListMerchants}></Route>
            <Route path="/merchants/add-new-merchant" component={CreateMerchantComponent}></Route>
            <Route path="/vouchers" exact component={ListVouchers}></Route>
            <Route path="/vouchers/add-new-voucher" component={CreateVoucherComponent}></Route>
            <Route path="/vouchers/add-criteria-to-voucher" component={AddVoucherCriteriaComponent}></Route>
            <Route path="/vouchers/show/:id" component={ShowVoucher}></Route>
            <Route path="/vouchers/update/:id" component={UpdateVoucherComponent}></Route>
            <Route path="/configurations" exact component={ListConfigurationComponent}></Route>
            <Route path="/configurations/add-new-configuration" component={AddConfigurationComponent}></Route>
            <Route path="/user/list-available-vouchers" component={ListOfDeserviedVouchers}></Route>
            <Route path="/user/list-purchased-vouchers" component={ListBoughtVouchers}></Route>
            <Route path="/criterias" exact component={ListCriteriasComponent}></Route>
            <Route path="/criterias/add-new-criteria" exact component={AddCriteriaComponent}></Route>
          </Switch>
        </div>
      </div>
  
  );
  }
}

export default App;
