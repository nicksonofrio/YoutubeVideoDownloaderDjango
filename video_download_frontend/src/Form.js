import React, { Component, useState } from "react"
import styled from "styled-components"
import axios from 'axios'

export default class Form extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      	download_directory: "",
	    video_url: "",
	    url_area: "",
	    file_upload: "",

    }
    //this.fetchTasks = this.fetchTasks.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  };

  submitted = {
    display: false,
    message: "",
  }

  change = (e) => {
  	this.setState({ [e.target.name]: e.target.value});
  };

  handleSubmit = e => {
  	e.preventDefault();
  	const payload = {
  		download_directory: this.state.download_directory,
	    video_url: this.state.video_url,
	    url_area: this.state.url_area,
	    file_upload: this.state.file_upload,
  	}
  	axios({
  		url:'http://127.0.0.1:8000/videos-list/',
  		method:'POST',
  		data: payload,
  	}).then(() => {
  		console.log('Data was sent');
  	}).catch(() => {
  		console.log('Data not sent');
  	});

  	//var csrftoken = this.getCookie('csrftoken')
  	//console.log("submit", this.state.singleUrl, csrftoken)
  	//var url = 'http://127.0.0.1:8000/api/getFrontEndData'
  	//var url = 'http://127.0.0.1:8000/videos-list/'
  	/*fetch(url, {
  		'method': 'POST',
  		'credentials': 'include',
  		'headers': {
  			'Content-Type':'application/json', 
  			//'X-CSRFToken': csrftoken,
  			//'Access-Control-Allow-Origin': '*',
  			//'Access-Control-Allow-Origin': 'http://localhost:3000',
  			//'Access-Control-Allow-Credentials': true,
  			//'Access-Control-Allow-Headers': 'Content-Type',
  			//'Access-Control-Allow-Methods': 'POST',
  		},
  		body:JSON.stringify(this.state.singleUrl)
  	}).then((response) => {
  		this.fetchTasks()
  		this.setState({
  			singleUrl: ''
  		})
  	}).catch(function(error) {
  		console.log('Error sending data', error)
  	})*/
  	/*fetch("http://127.0.0.1:8000", {
	    "method": "POST",
	    "credentials": "include",
	    "headers": {
	        "Content-Type": "application/json"
	    }
	});*/

  }

  
  /*componentWillMount() {
    this.fetchTasks()
  }

  /fetchTasks() {
    console.log("Before there", this.state.singleUrl)
    fetch('http://127.0.0.1:8000/').then(response => response.json()).then(data => this.setState({singleUrl: this.singleUrl}))
    console.log('After fetch')
  }*/

	render() {
		//outline removes outline. hover changes the color to be slightly darker when hovered. transition animates the background color
	  const Button = styled.button`
	  background-color: blue;
	  color: white;
	  padding: 5px 15px;
	  border-radius: 5px;
	  outline: 0;
	  box-shadow: 0px 2px 2px lightgray;
	  text-transform: uppercase;
	  cursor: pointer;
	  transition: ease background-color 250ms;
	  &:hover {
	    background-color: #283593;
	  }
	`;

		return (
			<div>
		      <h1>Youtube Video Downloader</h1>
		      <br></br>
		      <div  className="download-form">
		        <form className="form" onSubmit={this.handleSubmit}>
		          {this.submitted.display ? <div className="success-message">Your Video Downloaded Successfully</div> : null }
		          <br />
		          <label>Insert the Directory where you would like to save the video/videos:</label>
		          <input className="download_directory" style={{width: "500px" }} placeholder="Insert Directory to Save to Here" name="download_directory" value={this.state.download_directory} onChange={e => this.change(e)}/>
		          <br />
		          <label style={{paddingTop: "10px"}}>Insert the URL of the Youtube video you would like to download:</label>
		          <input className="video_url" style={{width: "500px"}} placeholder="Insert URL Here" name="video_url" value={this.state.video_url} onChange={e => this.change(e)}/>
		          <br></br>
		          <label style={{paddingTop: "10px"}}>Insert a comma separated list of Youtube video URL's that you would like to download:</label>
		          <input className="url_area" style={{height: "200px", width: "500px" }} type="textarea" placeholder="Insert Multiple URL's Here" name="url_area" value={this.state.url_area} onChange={e => this.change(e)}/>
		          <br></br>
		          <br />
		          <Button >Download</Button>
		        </form>
		      </div>
		    </div>
			);
	}
}