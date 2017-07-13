import React, {Component} from "react";
//import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";

const iTypes = [{
  desc: 'Self Directed',
  summary: 'Stronger than my peers, but I\'m here to see what you offer.  I\'m skeptical about "professionals".' 
  }, {
  desc: 'Validator',
  summary: "I feel good about what I'm doing and want to maintain control.  I would like someone on occasion to validate my holdings."
  }, {
  desc: 'Delegator',
  summary: "I don't have the time, or possibly the confidence, to manage everything by myself.  I would prefer to delegate some responsibilities to professionals."
  }
];

class ListItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			investorType: ''
		};
	}

	render() {
		return(
			<div>
			  <select name={this.state.investorType}>
			  	<option value={iTypes.desc[0]}>{iTypes.desc[0]}</option>
			  	<p>{iTypes.summary[0]}</p>
				<option value={iTypes.desc[1]}>{iTypes.desc[1]}</option>
				<p>{iTypes.summary[1]}</p>
			  	<option value={iTypes.desc[2]}>{iTypes.desc[2]}</option>
			  	<p>{iTypes.summary[2]}</p>
			  </select>	
			</div>
		)
	}
}

// Export the component back for use in other files
export default ListItems;