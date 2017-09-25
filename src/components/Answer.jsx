import React from 'react';
import _ from 'lodash';
import '../styles/Answer.scss'

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			path: props.path,
			extension: props.extension,
			disabled: false,
			invalid: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let value = _.chain(this.input.value).trim().escape().value();
		this.input.value = value;

		let invalid = _.isEqual(value, '');
		if (invalid){
			this.setState({invalid});
			this.input.focus();
			return;
		}

		this.props.checkAnswer(value);
		this.setState({disabled: true})
	}
	componentDidMount(){
		this.input.focus();
	}
	componentWillReceiveProps(nextProps){
        this.state = {
			path: nextProps.path,
			extension: nextProps.extension
		};
    }
  	render() {
  		const {disabled, invalid} = this.state;

    	return (
    		<form className="Answer__Form" onSubmit={this.handleSubmit}>
		 		<div className="Answer__Form_question">What is the name of this Marvel Character?</div>
		 		<div>
		 			<input type="text" className="Answer__Form_text" ref={(input) => this.input = input} disabled={disabled}/>
		 		</div>
		 		{invalid && 
			 		<div className="Answer__error">
			 			Responda corretamente. Não aceitamos espaços e nem vazio! :)
			 		</div>
			 	}
		 		<div className="Answer__Form_divbtn">
		 			<button type="submit" className="Answer__Form_btn" disabled={disabled}>
		 				<i className="fa fa-reply" aria-hidden="true"></i>
		 				Answer
		 			</button>
		 		</div>
	 		</form>
    	);
  	}
}