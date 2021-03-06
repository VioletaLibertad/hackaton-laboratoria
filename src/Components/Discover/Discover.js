import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Discover2.css'
import FixedNavbar from '../Shared/Navbar';
import {BottomFixedNavbar, TopFixedNavbar} from '../Shared/Navbar';
import Science from '../../img/science.png';
import Maths from '../../img/math.png';
import Tech from '../../img/tech.png';
import Engineer from '../../img/engineer.png';

class Discover extends Component {
  render(){
    return(
      <div>
        <div className="boxes-wrapper">
          <TopFixedNavbar />
          <Link  to="/descubre/ingenierias"><img className="cards eng" src={Engineer} alt="Engineer"/></Link>
          <img className="cards scn" src={Science} alt="science"/>
          <img className="cards mat" src={Maths} alt="Maths"/>
          <img className="cards tec" src={Tech} alt="Tech"/>
        </div>
        <BottomFixedNavbar/>
      </div>
    )
  }
}

export default Discover;