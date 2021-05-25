import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from "react"
import styled from "styled-components"

function App() {
  const[values, setValues] = useState({
    saveDirectory: "",
    singleUrl: "",
    multiUrl: "",
    file: "",
  });

  const[submitted, setSubmitted] = useState({
    display: false,
    message: "",
  });

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


  //on update of the form we want to make sure the changes are saved in the input
  const handleDirectoryFieldChange = (event) => {
    setValues({...values, saveDirectory: event.target.value})
  }
  const handleSingleUrlFieldChange = (event) => {
    setValues({...values, singleUrl: event.target.value})
  }
  const handleMultiUrlFieldChange = (event) => {
    setValues({...values, multiUrl: event.target.value})
  }

  const handleSubmit = (event) => {
    //prevents page refresh
    event.preventDefault();
    if (values.singleUrl || values.multiUrl) {
      setSubmitted({display:true, message:"Videos Downloaded"});
    }
    else {
      setSubmitted({display:true, message:"Must provide a url before you can download"});
    }
    
  }



  return (
    <div>
      <h1>Youtube Video Downloader</h1>
      <br></br>
      <div className="download-form">
        <form className="form" onSubmit={handleSubmit}>
          {submitted.display ? <div className="success-message">Your Video Downloaded Successfully</div> : null }
          <br></br>
          <label>Insert the Directory where you would like to save the video/videos</label>
          <input className="directory-field" placeholder="Insert Save Directory Here" name="directoryField" value={values.saveDirectory} onChange={handleDirectoryFieldChange}/>
          <br></br>
          <label>Insert the URL of the Youtube video you would like to download</label>
          <input className="singleUrl-field" placeholder="Insert URL Here" name="singleUrlField" value={values.singleUrl} onChange={handleSingleUrlFieldChange}/>
          <br></br>
          <label>Insert a comma separated list of Youtube video URL's that you would like to download</label>
          <input className="multiUrl-field" placeholder="Insert Multiple URL's Here" name="multiUrlField" value={values.multiUrl} onChange={handleMultiUrlFieldChange}/>
          <br></br>
          <Button>Download</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
