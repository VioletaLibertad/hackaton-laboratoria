import React, { Component } from 'react';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import './Discover2.css'
import FixedNavbar from '../Shared/Navbar';
=======
import {BottomFixedNavbar} from '../Shared/Navbar';
>>>>>>> 5da3c8bf64182187b937e017921b53a13ee49032
import Science from '../../img/science.png';
import Maths from '../../img/math.png';
import Tech from '../../img/tech.png';
import Engineer from '../../img/engineer.png';

class Discover extends Component {
  render(){
    return(
      <div>
        <div className="boxes-wrapper">
<<<<<<< HEAD
          <Link  to="/descubre/ingenierias"><img className="cards eng" src={Engineer} alt="Engineer"/></Link>
          <img className="cards scn" src={Science} alt="science"/>
          <img className="cards mat" src={Maths} alt="Maths"/>
          <img className="cards tec" src={Tech} alt="Tech"/>
=======
          <Link to="/ingenierias"><img src={Engineer} alt="Engineer"/></Link>
          <img src={Science} alt="science"/>
          <img src={Maths} alt="Maths"/>
          <img src={Tech} alt="Tech"/>
>>>>>>> 5da3c8bf64182187b937e017921b53a13ee49032
        </div>
        <BottomFixedNavbar/>
      </div>
    )
  }
}

export default Discover;