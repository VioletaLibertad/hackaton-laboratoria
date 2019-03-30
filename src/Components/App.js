import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login';
import Discover from './Discover/Discover';
import Community from './Community/Community';
import Profile from './Profile/Profile';
// import Landing from './Landing/Landing';

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Route path="/" component={Landing}/> */}
          <Route path="/login" component={Login}/>
          <Route path="/descubre" component={Discover}/>
          <Route path="/comunidad" component={Community}/>
          <Route path="/perfil" component={Profile}/>
        </Router>
      </div>
    );
  }
}

export default App;
