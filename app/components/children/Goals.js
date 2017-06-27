import React from "react";
import { Button Panel ButtonGroup Col } from "react-bootstrap";

const iTypes = [{
  desc: 'Self Directed',
  summary: 'Stronger than my peers, but I'm here to see what you offer.  I'm skeptical about "professionals".' 
  }, {
  desc: 'Validator',
  summary: "I feel good about what I'm doing and want to maintain control.  I would like someone on occasion to validate my holdings."
  }, {
  desc: 'Delegator',
  summary: "I don't have the time, or possibly the confidence, to manage everything by myself.  I would prefer to delegate some responsibilities to professionals."
  }
];

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

// create buttons for the iType selection panel
var iTypeList = React.createClass {
// const iTypes = props.iTypes;
  const listItems = iTypes.map((desc) =>
    render: function() { 
    <li>{iTypes.desc}</li>
    <Button>{iTypes.summary}</Button>
  });
  return {listItems};
};

// create buttons for the iGoal selection panel
function iGoalList(props) {
//  const iGoals = props.iGoals;
  const listItems = iGoals.map((desc) =>
    <li>{iGoals.desc[]}</li>
    <Button>{iGoals.type[]}</Button>
  );
  return {listItems};
};

class Goals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      investorType: '',
      investorGoal: '',
    }
  }

  handleChange: function(event) {
    //update selection within clicked panel
    //make sure hilite is on selected item
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  doCommit: function() {
    // commit selections to storage
    // trigger next page
  }

  render() {
    return (
        <div>
          <h3>Thank you for stopping by.  What are you seeking to accomplish today?</h3>
          <br>
          <Panel heading="<em>How do you feel about investments?</em>">
            <Col xs={12} sm={12} md={6} />
            <ul>
            <ButtonGroup vertical block>
  // create 3 buttons using JSON text
              {this.iTypeList()}
            </ul>
          </Panel>
          <Panel heading="<em>My Primary Investment need is:</em>">
            <Col xs={12} sm={12} md={6} />
            <ul>
            <ButtonGroup vertical block>
  // create 3 buttons using JSON text
              {this.iGoalList()}
            />
            </ul>
          </Panel>
          <Button type="submit" className="btn btn-primary" onClick={doCommit()}>
              Submit
          </Button>
        </div>  
    );
  },
}

// Export the component back for use in other files
export default Goals;