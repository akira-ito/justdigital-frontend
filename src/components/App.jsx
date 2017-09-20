import React from 'react';
import Image from './Image.jsx'
import Answer from './Answer.jsx'
import * as CharactersService from '../services/Characters'
import '../styles/App.scss'

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			character: null,
			thumbnail: null
		};

	}
	componentDidMount() {
		CharactersService.random()
			.then(data => {
				this.setState({
					character: data.data.results[0],
					thumbnail: data.data.results[0].thumbnail
				})
			});
	}
  	render() {
    	return (
    		<div className="App">
    		 	<div className="App__title">
    		 		Marvelous Quiz
    		 	</div>
    		 	<div className="App__row">
	    		 	<div className="App__score">0</div>
	    		 	<div className="App__img">
	    		 		<Image {...this.state.thumbnail}/>
	    		 	</div>
	    		 	<div className="App__form">
	    		 		<Answer />
	    		 	</div>
    		 	</div>
    		 	<div className="App__bottom_bar">
    		 		<div className="App__tips">I give up, who is it?</div>
    		 		<div className="App__next">Next</div>
    		 	</div>
		  	</div>
    	);
  	}
}