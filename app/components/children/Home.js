import React from "react";
import { Grid, Row, Thumbnail, Button, Col } from "react-bootstrap";

class Home extends React.Component {

  getStarted() {
    //if this.state.investorType && this.state.investorGoal {
      //console.log(this.state.investorType)
      //console.log(this.state.investorGoal)
      console.log("getting Started")

    //}
    // commit selections to storage upon SUBMIT
    // trigger next page
  }

  render() {
    return (
      <div>
        <div>

          <Link to="/Goals"><button className="btn btn-primary btn-lg">START</button></Link>

          <h3>Press Start to begin entering some information to help us choose a portfolio.</h3>

        </div>

        <div className="links">
          <Grid>
            <Row>
              <Col xs={8} md={4}>
                <Thumbnail href='http://www.reuters.com' src='./assets/images/Reuters.jpg' alt='Reuters'>
                  <p>Reuters</p>
                </Thumbnail>
                <Thumbnail href='http://www.cnbc.com' src='./assets/images/cnbc.png' alt='CNBC'>
                  <p>CNBC</p>
                </Thumbnail>
                <Thumbnail href='https://www.forbes.com' src='./assets/images/Forbes.jpeg' alt='Forbes'>
                  <p>Forbes</p>
                </Thumbnail>
                <Thumbnail href='https://www.thestreet.com' src='./assets/images/theStreet.png' alt='theStreet'>
                  <p>the Street, Inc</p>
                </Thumbnail>
              </Col>    
            </Row>
            <Row>
              <Col xs={8} md={4}>
                <Thumbnail href='http://www.morningstar.com' src='./assets/images/MorningStar-logo.jpg' alt='Morningstar'>
                  <p>Morningstar, Inc.</p>
                </Thumbnail>
                <Thumbnail href='http://www.marketwatch.com' src='./assets/images/market-watch-logo.jpg' alt='MarketWatch'>
                  <p>MarketWatch</p>
                </Thumbnail>
                <Thumbnail href='https://www.bloomberg.com' src='./assets/images/Bloomberg.png' alt='Bloomberg'>
                  <p>Bloomberg L.P.</p>
                </Thumbnail>
                <Thumbnail href='https://seekingalpha.com' src='./assets/images/Alpha.png' alt='Seeking Alpha'>
                  <p>Seeking Alpha</p>
                </Thumbnail>
              </Col>    
            </Row>       
          </Grid>
        </div>  
      </div>
    )
  }
};

// Export the component back for use in other files
export default Home;