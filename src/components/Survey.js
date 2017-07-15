import React, {Component} from "react";
//import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";

// There must the same number of elements in both the answers and weights arrays.
const Survey = [{
  question: 'Which best describes your investment objective?',
  answers: ['Current income is my primary objective with capital appreciation being secondary.',
  	'Capital appreciation is my primary objective with current income being secondary.',
  	'Capital appreciation is my only objective.'],
  weights: [6, 8, 10] 
  }, {
  question: 'How important is it for your portfolio to generate current income?',
  answers: ['Very important - I will use current income from the portfolio to meet current expenses.',
  	'Somewhat important - Distributions from this portfolio will help in meeting current expenses.',
  	'Not important.  Current income is not a consideration.'],
  weights: [3, 5, 7] 
  }, {
  question: 'When is the earliest that you anticipate needing all or a substantial portion of your investable assets?',
  answers: ['0-5 years',
  	'6-10 years',
  	'11-15 years',
  	'Over 15 years'],
  weights: [0, 6, 9, 12] 
  }, {
  question: 'What is your age range?',
  answers: ['Over 75',
  	'65-74',
  	'55-64',
  	'40-54',
  	'Under 40'],
  weights: [-5, -2, 2, 6, 9] 
  }, {
  question: 'How willing are you to accept fluctuations in the value of your portfolio?',
  answers: ['Fluctuation in principal is a key concern.',
  	'Fluctuation in principal is a moderate concern.',
  	'Fluctuation in principal is a minor concern.',
  	'Fluctuation in principal is of no concern.'],
  weights: [-2, 0, 1, 2] 
  }, {
  question: 'How important is it to you to be able to liquidate part or all of your portfolio with little loss of your investments?',
  answers: ['Very important.',
  	'Moderately important.',
  	'Not important.'],
  weights: [-2, 1, 2] 
  }, {
  question: 'Short-term volatility in financial markets may cause portfolios to decline in value.  How willing are you to accept short-term losses?',
  answers: ['I am unwilling to accept more than a small, temporary loss in portfolio value.',
  	'I am willing to accept short-term losses, but not as much as the loss in the broad equity market.',
  	'I am willing to accept short-term losses in line with the broad equity market.',
  	'I am willing to accept higher than market short-term losses as part of a strategy to achieve higher than long-term market returns.'],
  weights: [-3, 0, 4, 7] 
  }
];

class Survey extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			answers: []
		};
	}

	createSurvey() {
    
		return(
      console.log("in createSurvey")
		)
	}


	render() {
		return(
			<div>
			<this.createSurvey() />
			
			  <select name={this.state.investorType}>
			  	<option value=iTypes.desc[0]>{iTypes.desc[0]}</option>
			  	  <p>{iTypes.summary[0]}</p>
				  <option value=iTypes.desc[1]>{iTypes.desc[1]}</option>
				    <p>{iTypes.summary[1]}</p>
			  	<option value=iTypes.desc[2]>{iTypes.desc[2]}</option>
			  	  <p>{iTypes.summary[2]}</p>
			  </select>	
			</div>
		)
	}
}

// Export the component back for use in other files
export default ListItems;