import React, {Component} from "react";
//import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";

const iGoals = [{
    desc: 'Growth',
    type: 'To grow capital', 
    needs: ["Fund an early retirement", "Finance a child or grandchild's education"]
  }, {
    desc: 'Income',
    type: 'To increase current income',
    needs: ["Preserving Capital", "Supplemental Retirement Spending"]  
  }, {
    desc: 'Tax Savings',
    type: 'To reduce taxes',
    needs: ["Ideas that produce tax-free income", "Ideas that produce tax-deferred income (pay taxes at a later date)"]
  }
];

class GoalList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			investorGoal: ''
		};
	}

	render() {
		return(
			<div>
			  <select name={this.state.investorGoal}>
			  	<option value=iGoals.desc[0]>{iGoals.desc[0]}</option>
			  	  <ul>
			  	    <li>{iGoals.type[0]}</li>
			  	    <ul>
			  	      <li>{iGoals.needs[0, 0]}</li>
			  	      <li>{iGoals.needs[0, 1]}</li>
			  	    </ul>
			  	  </ul>    
				<option value=iGoals.desc[1]>{iGoals.desc[1]}</option>
				    <ul>
              <li>{iGoals.type[1]}</li>
              <ul>
                <li>{iGoals.needs[1, 0]}</li>
                <li>{iGoals.needs[1, 1]}</li>
              </ul>
            </ul>
			  	<option value=iGoals.desc[2]>{iGoals.desc[2]}</option>
			  	  <ul>
              <li>{iGoals.type[2]}</li>
              <ul>
                <li>{iGoals.needs[2, 0]}</li>
                <li>{iGoals.needs[2, 1]}</li>
              </ul>
            </ul>
			  </select>	
			</div>
		)
	}
}

// Export the component back for use in other files
export default GoalList;