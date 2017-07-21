import React from "react";
import { Grid, Row, Thumbnail, Button, Col } from "react-bootstrap";
import { browserHistory } from "react-router";
// import thumbnail images
import rLogo from "./components/assets/images/Reuters.jpg";
import cLogo from "./components/assets/images/cnbc.png";
import fLogo from "./components/assets/images/Forbes.jpeg";
import sLogo from "./components/assets/images/theStreet.png";
import moLogo from "./components/assets/images/MorningStar-logo.jpg";
import maLogo from "./components/assets/images/market-watch-logo.jpg";
import bLogo from "./components/assets/images/Bloomberg.png";
import aLogo from "./components/assets/images/Alpha.png";

// import css styles
//import './Home.css';

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.getStarted = this.getStarted.bind(this);
  }  

  getStarted() {

      console.log("getting Started");
      browserHistory.push("/goals");
    // trigger the rendering of the Goals component
  }

  render() {
    return (
      <div> 

        <div>
          <Row>
          <Col xs={4} xsOffset={4} sm={4} smOffset={4} md={4} mdOffset={4}>
            <Button className="btn btn-primary btn-lg" bsSize="large" bsStyle='danger' block onClick={this.getStarted}>START</Button>
          </Col>
          </Row>
          <Row>
          <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={6} mdOffset={3}>
            <h3>Press Start to begin entering some information that will help us choose a portfolio.</h3>
          </Col>
          </Row>
        </div>

        <br></br>

        <div>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={4} mdOffset={2}>
          <Grid>
            <Row>
              <Col xs={2} sm={2} md={3}>
                <Thumbnail src={rLogo} alt="Reuters" href="http://www.reuters.com">
                  <p>Reuters</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3}>
                <Thumbnail src={cLogo} alt="CNBC" href="http://www.cnbc.com">
                  <p>CNBC</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3}>  
                <Thumbnail src={fLogo} alt="Forbes" href="https://www.forbes.com">
                  <p>Forbes</p>
                </Thumbnail>
              </Col>  
              <Col xs={2} sm={2} md={3}>
              <Thumbnail src={sLogo} alt="theStreet" href="https://www.thestreet.com">
                <p>the Street, Inc</p>
              </Thumbnail>
              </Col>
            </Row>

            <Row>
              <Col xs={2} sm={2} md={3}>
                <Thumbnail src={moLogo} alt='Morningstar' href='http://www.morningstar.com'>
                  <p>Morningstar, Inc.</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3}>
                <Thumbnail src={maLogo} alt='MarketWatch' href='http://www.marketwatch.com'>
                  <p>MarketWatch</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3}>
                <Thumbnail src={bLogo} alt='Bloomberg' href='https://www.bloomberg.com'>
                  <p>Bloomberg L.P.</p>
                </Thumbnail>
              </Col>
              <Col xs={2} sm={2} md={3}>
                <Thumbnail src={aLogo} alt='Seeking Alpha' href='https://seekingalpha.com'>
                  <p>Seeking Alpha</p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
          </Col>    
        </div>  

      </div>
    )
  }
};

// Export the component back for use in other files
export default Home;