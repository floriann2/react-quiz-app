import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

class QuizSummary extends Component {
	constructor(props){
		super(props);
		this.state = {
			score: 0, 
			numberOfQuestions: 0,
			numberOfAnsweredQuestions: 0,
			correctAnswers: 0,
			wrongAnswers: 0,
			usedHints: 0,
			usedFiftyFifty: 0
		}
	}
	componentDidMount () {
		const { state } = this.props.location;
		this.setState({	
			score: (state.score / state.numberOfQuestions) * 100, 
			numberOfQuestions: state.numberOfQuestions,
			numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
			correctAnswers: state.correctAnswers,
			wrongAnswers: state.wrongAnswers,
			hintsUsed: state.hintsUsed,
			fiftyFiftyUsed: state.fiftyFiftyUsed
		});
	}
	render () {
		return (
			<Fragment>
				<Helmet><title>Quiz App - Summary</title></Helmet>
			</Fragment>
		);
	}
}

export default QuizSummary;