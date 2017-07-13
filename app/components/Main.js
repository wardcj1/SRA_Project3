import React from "react";
import ReactDOM from "react-dom";
import { Col } from "react-bootstrap";


// Import sub-components
//import Goals from "./children/Goals";
import Home from "./children/Home";

class Main extends React.Component {

  componentDidMount(){
    console.log('MAIN RENDER');
  }

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">Smart Robo Investments</h1>
          </div>
        </div>  
        <div>
          <Col xs={12} sm={12} md={12}>
            <Home />
          </Col>
        </div>
      </div>
      
    );
  }

}

// Export the component back for use in other files
export default Main;