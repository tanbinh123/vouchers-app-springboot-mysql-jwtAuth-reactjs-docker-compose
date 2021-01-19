import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../Services/auth.service";
import UserService from "../../Services/UserService";

export default class Profile extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      userPoints:null
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    console.log(currentUser);
    if (!currentUser || currentUser==null) 
    this.props.history.push('/home')
    const userPoints=UserService.getUserPoints().then((res)=>{
      this.setState({ currentUser: currentUser, userReady: true , userPoints:res.data })
      console.log(this.state);
    })

    
   
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <h3>
          Profile:
            <hr/>
        </h3>
        <p>
        <strong>Username: </strong> {currentUser.username}
      </p>
        <p>
        
        
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        
        {currentUser.roles && currentUser.roles[0]==="ROLE_USER"&&
         <p>
         <strong>Points:</strong>{" "}
         {this.state.userPoints} 
       </p>
       }
       

      </div>: null}
      </div>
    );
  }
}
