import React, {Component} from "react";
import update from 'react-addons-update';

import Question from './components/Question';
import quizQuestions from './components/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './Survey.css';
//import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";

export class Survey extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: 0,
      answerWeight: 0,
      result: ''
		};
    this.handleAnswerSelected=this.handleAnswerSelected.bind(this);
	}

  componentWillMount() {
    //const shuffledAnswerOptions = quizQuestions.map(question);

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].question.answers
    });
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer 
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    };
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />  
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

	render() {
		return(
			<div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>  
		)
	}
}

// Export the component back for use in other files
export default Survey;