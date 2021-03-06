import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faUser, faBookOpen, faLock, faBell, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Login from './Login/Login';
import Discover from './Discover/Discover';
import Community from './Community/Community';
import Profile from './Profile/Profile';
import Landing from './Landing/Landing';
import Engineering from './Engineering/Engineering';
import './App.css';

library.add(faUsers, faUser, faBookOpen, faLock, faBell, faChevronLeft);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Landing}/>
          <Route path="/login" component={Login}/>
          <Route path="/descubre" component={Discover}/>
          <Route path="/comunidad" component={Community}/>
          <Route path="/perfil" component={Profile}/>
          <Route path="/ingenierias" component={Engineering} />
        </Router>
      </div>
    );
  }
}

export default App;
