import React from 'react';
import Image from './Image.jsx'
import Answer from './Answer.jsx'
import Modal from './Modal.jsx'

import * as CharactersService from '../services/Characters'
import '../styles/App.scss'

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			character: null,
			thumbnail: null,
			score: 0,
			disabledNext: true
		};
		this.checkAnswer = this.checkAnswer.bind(this);
		this.handleTips = this.handleTips.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}
	checkAnswer(answer){
		this.setState({disabledNext: false});
		let correct = this.state.character.name == answer

		if (correct){
			this.setState((prevState, props) => {
			  return {score: prevState.score + 1};
			});
			this.modal.show('correct');
		} else {
			this.modal.show('wrong');
		}
		return correct;
	}
	handleTips(){
		this.setState({disabledNext: false});
		this.modal.show()
	}
	handleNext(){
		this.setState({disabledNext: true});
		CharactersService.random()
			.then(data => {
				this.setState({
					character: data.data.results[0],
					thumbnail: data.data.results[0].thumbnail
				})
			});
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
	    		 	<div className="App__score">{this.state.score}</div>
	    		 	<div className="App__img">
	    		 		<Image {...this.state.thumbnail}/>
	    		 	</div>
	    		 	<div className="App__form">
	    		 		<Answer checkAnswer={this.checkAnswer} />
	    		 	</div>
    		 	</div>
    		 	<div className="App__bottom_bar">
    		 		<div className="App__share"> &nbsp;</div>
    		 		<div className="App__tips" onClick={this.handleTips}>
    		 			<i className="fa fa-question-circle fa-2x" aria-hidden="true"></i>
    		 			<span>I give up, who is it?</span>
    		 		</div>
    		 		<div className="App__next" onClick={this.handleNext} disabled={this.state.disabledNext}>
    		 			Next
    		 			<i className="fa fa-arrow-right" aria-hidden="true"></i>
    		 			<div className="teste"></div>
    		 		</div>
    		 		<div className="App__border" disabled={this.state.disabledNext}></div>
    		 	</div>

    		 	<Modal ref={input => this.modal=input}></Modal>
		  	</div>
    	);
  	}
}