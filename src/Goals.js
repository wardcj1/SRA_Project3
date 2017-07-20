import React from "react";
import { Panel, Button, Col, Row, Jumbotron, Image } from "react-bootstrap";
import { browserHistory } from "react-router";

import sriLogo from "./components/assets/images/sri_logo.png";
import {ListItems} from "./ListItems";
import {GoalList} from "./GoalList";
import './Goals.css';

const goalTitle = (
  <h3>How do you feel about investments?</h3>
);
const typeTitle = (
  <h3>My Primary Investment need is:</h3>
);

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
      browserHistory.push("/survey");
    //}
    // commit selections to storage upon SUBMIT
    // trigger next page
  }

  render() {
    return (
        <div className="container">

        <Col xs={4} xsOffset={4} sm={4} smOffset={4} md={4} mdOffset={4}>
          <div className='logo'>
            <Image src={sriLogo} alt='shoreline' align='middle' responsive></Image>
          </div>
        </Col>  

          <h3 className="text-center">Please select the 2 options that most closely describe you and press Submit.</h3>
          <br />

          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={5}>
            <Panel header={goalTitle}>
              <ListItems />
            </Panel>
          </Col>  

          <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={5} mdOffset={1}>
            <Panel header={typeTitle}>
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