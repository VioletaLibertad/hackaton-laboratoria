import React, { Component } from 'react';
import {BottomFixedNavbar, TopFixedNavbar} from '../Shared/Navbar';

class Engineering extends Component {
  render(){
    return(
      <div>
        <TopFixedNavbar />
        <p>Descubre</p>
        <BottomFixedNavbar />
      </div>
    )
  }
}

export default Engineering;