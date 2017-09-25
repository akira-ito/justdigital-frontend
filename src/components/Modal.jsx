import React from 'react';
var FlyModal = require('boron/FlyModal');
var OutlineModal = require('boron/OutlineModal');

var modalStyle = {
};

var backdropStyle = {
    backgroundColor: 'red'
};

var contentStyle = {
    backgroundColor: 'blue',
    height: '100%'
};


export default class App extends React.Component {
	show(type) {
		switch(type) {
			case 'correct':
				this.correct.show();
				break;
			default:
				this.wrong.show();
				break;
		}
	}
  	render() {
    	return (
    		<div>
	    		<FlyModal ref={input => this.correct=input}>
	                <div>
	                	Parabéns você acertou o nome!
	                </div>
	            </FlyModal>

	    		<OutlineModal ref={input => this.wrong=input} modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
	                <div>
	                	Você errou o nome!
	                </div>
	            </OutlineModal>
	        </div>
    	);
  	}
}