import React from "react";
import ReactDOM from "react-dom";

// Import sub-components
import Goals from "./children/Goals";

class Main extends React.Component {
  // intialize state
  constructor(props) {

    super(props);
    this.state = {

    }

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
        <div className="col-md-12">
          <Goals />
        </div>
      </div>
      
    );
  }

}

// Export the component back for use in other files
export default Main;