import React, { Component } from "react";

import UserService from "../../Services/user.service";
import { Switch, Route, Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
     
       <div className="container text-center">
    <div />
     <img src="wasla.gif" class="img-fluid" width="70%"/>
     
    </div>

    
    );
  }
}
