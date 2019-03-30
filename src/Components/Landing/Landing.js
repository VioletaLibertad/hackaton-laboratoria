import React, { Component } from 'react';
import Dailymotion from 'react-dailymotion';
 

class Landing extends Component {
	render() {
		return 
		<div className="videoContainer">
			<Dailymotion
			video="178UhHO"
			uiTheme="light"
			autoplay
			/>;
		</div>
	}
}

export default Landing;