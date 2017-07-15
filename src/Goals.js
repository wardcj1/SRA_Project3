import React from "react";
import { Panel, Button, Col, Row, Jumbotron } from "react-bootstrap";
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
        <div className="container">

          <div>
          <Row>
            <Jumbotron>
              <h1 className="text-center">Smart Robo Investments</h1>
            </Jumbotron>
          </Row>  
          </div>

          <h3>Please select the 2 options that most closely describe you and press Submit.</h3>
          <br />

          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={5} mdOffset={1}>
            <Panel heading='How do you feel about investments?'>
              <ListItems />
            </Panel>
          </Col>  

          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={5}>
            <Panel heading='My Primary Investment need is:'>
              <GoalList />
            </Panel>
          </Col>  

          <Col xs={4} xsOffset={4} sm={4} smOffset={4} md={4} mdOffset={4}>
            <Button type="submit" className="btn btn-primary" bsSize="large" block onClick={this.doCommit()}>
              Submit
            </Button>
          </Col>

        </div>  
    )
  }
};

// Export the component back for use in other files
export default Goals;