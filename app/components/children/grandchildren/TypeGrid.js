import React, {Component} from "react";
import { Button, Panel, ButtonGroup, Col } from "react-bootstrap";
import ListItems from './ListItems';

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

// create buttons for the iType selection panel



class TypeGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      investorType: ''
    }
  }

  iTypeList() {
    return iTypes.map(item => {
      return <ListItems description={item.desc} summary={item.summary} highlight={this.handleChange}/>
    })
  } 

  handleChange(event) {
    //update selection within clicked panel
    //make sure hilite is on selected item
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
        <div>
          <ul>
            <ButtonGroup vertical block>
              <Button type="submit" className="btn btn-primary" onClick={doCommit()}>
              Submit
              </Button>
              {this.iTypeList()}
          </ul>
        </div>  
    );
  }
};

// Export the component back for use in other files
export default TypeGrid;