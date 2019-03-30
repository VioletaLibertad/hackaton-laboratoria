import React, { Component } from 'react';
import {BottomFixedNavbar, TopFixedNavbar} from '../Shared/Navbar';
import barbara from '../../img/barbara.jpeg';
import jocelyn from '../../img/jocelyn.jpeg';
import karin from '../../img/karin.jpeg';
import romina from '../../img/romina.jpeg';

class Engineering extends Component {
  render(){
    return(
      <div>
        <TopFixedNavbar />
          <img src={romina} alt="romina"/>
          <img src={karin} alt="karin"/>
          <img src={barbara} alt="barbara"/>
          <img src={jocelyn} alt="jocelyn"/>
        <BottomFixedNavbar />
      </div>
    )
  }
}

export default Engineering;