import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.jpeg';

class Login extends Component {
  render(){
    return(
      <div>
        <img src={Logo} alt="logo"/>
        <input type="text"/>
        <input type="password"/>
        <Link className="login-button" to="/descubre">Ingresar</Link>
      </div>
    )
  }
}

export default Login;