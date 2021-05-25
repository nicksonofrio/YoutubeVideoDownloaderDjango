import React from 'react';

export default class Form extends React.Component {
	state = {

	}

	render() {
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
}