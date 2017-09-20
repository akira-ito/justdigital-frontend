import React from 'react';
import '../styles/Answer.scss'

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			path: props.path,
			extension: props.extension
		};

	}
	componentWillReceiveProps(nextProps){
        this.state = {
			path: nextProps.path,
			extension: nextProps.extension
		};
    }
  	render() {
    	return (
    		<form className="Answer__Form">
		 		<div className="Answer__Form_question">What is the name of this Marvel Character?</div>
		 		<div><input type="text" className="Answer__Form_text" /></div>
		 		<div className="Answer__Form_divbtn">
		 			<input type="submit" value="Answer" className="Answer__Form_btn"/>
		 		</div>
	 		</form>
    	);
  	}
}