import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FixedNavbar from '../Shared/Navbar';
import Science from '../../img/science.png';
import Maths from '../../img/math.png';
import Tech from '../../img/tech.png';
import Engineer from '../../img/engineer.png';

class Discover extends Component {
  render(){
    return(
      <div>
        <div className="boxes-wrapper">
          <Link to="/descubre/ingenierias"><img src={Engineer} alt="Engineer"/></Link>
          <img src={Science} alt="science"/>
          <img src={Maths} alt="Maths"/>
          <img src={Tech} alt="Tech"/>
        </div>
        <FixedNavbar/>
      </div>
    )
  }
}

export default Discover;