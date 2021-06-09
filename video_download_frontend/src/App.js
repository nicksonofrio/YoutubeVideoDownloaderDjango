import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from "react"
import styled from "styled-components"
import Form from './Form'
import axios from "axios";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfUrls: [],
      directory:'',
      singleUrl:'',
      multiUrl:'',
      file: '',

    }
    this.fetchTasks = this.fetchTasks.bind(this)
  };


  componentWillMount() {
    this.fetchTasks()
  }

  fetchTasks() {
    console.log("Hello there")
    fetch('http://127.0.0.1:8000/formview/').then(response => response.json()).then(data => this.setState({listOfUrls: data}))
    console.log('Post fetch')
  }


  render() {
    const height = window.innerHeight;
    return (
      <div style={{backgroundColor:"black", height:height}}>
      <div style={{paddingTop: "100px"}}>
        <div id="download-form" className="container">
          <Form />
        </div>
        </div>
      </div>
    )
  }
}

export default App;
