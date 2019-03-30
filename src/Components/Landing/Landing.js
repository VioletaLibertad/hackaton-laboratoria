import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ReactPlayer from 'react-player'
import './landing.css';

class Landing extends Component {
	constructor(){
		super();
		this.state = {
			redirect: false
		}
		this.endVideo = this.endVideo.bind(this)
	}

	// componentDidUpdate(){ 
	// 	this.endVideo.bind(this)
	// }

  
	endVideo(e){
		console.log(e)
		this.setState({	
			redirect: true
		})
		//console.log(this.state)
		
	}
	// renderRedirect = () => {
  //   if (this.state.redirect === true) {
	// 		console.log('deberia redirigir a login')
	// 		return <Redirect to='/login' />
	// 	}
  // }
	
	render() {
		return(
			<div>
			{!this.state.redirect && (
						<div className="videoContainer">
						<ReactPlayer url='https://www.dailymotion.com/embed/video/x7506bn' 
						playing= {true}
						controls= {true}
						loop={false}
						onEnded= {e => this.endVideo(e)}
						/>
					</div>
			)}
		{this.state.redirect && (
				<Redirect to='/login' />
			)}
			</div>
		
		)
	}
}

export default Landing;