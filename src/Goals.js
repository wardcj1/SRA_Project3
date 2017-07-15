import React from "react";
import { Panel, Button, Col } from "react-bootstrap";
import {ListItems} from "./ListItems";
import {GoalList} from "./GoalList";

export class Goals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      investorType: '',
      investorGoal: '',
    }
    this.doCommit = this.doCommit.bind(this);
  }

  handleChange(event) {
    //update selection within clicked panel
    //make sure hilite is on selected item
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  doCommit() {
    //if this.state.investorType && this.state.investorGoal {
      console.log(this.state.investorType)
      console.log(this.state.investorGoal)
    //}
    // commit selections to storage upon SUBMIT
    // trigger next page
  }

  render() {
    return (
        <div>

          <h3>Thank you for stopping by.  What are you seeking to accomplish today?</h3>
          <br />

          <Col xs={12} sm={12} md={6}>
            <Panel heading='How do you feel about investments?'>
              <ListItems />
            </Panel>
          </Col>  

          <Col xs={12} sm={12} md={6}>
            <Panel heading='My Primary Investment need is:'>
              <GoalList />
            </Panel>
          </Col>  

          <Button type="submit" className="btn btn-primary" onClick={this.doCommit()}>
              Submit
          </Button>

        </div>  
    )
  }
};

// Export the component back for use in other files
export default Goals;