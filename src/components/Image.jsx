import React from 'react';
import '../styles/Image.scss'

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
    		<img src={this.state.path+'/standard_fantastic.'+this.state.extension} />
    	);
  	}
}