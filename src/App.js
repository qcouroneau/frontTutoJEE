import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {
  Row, Col, Container
} from 'reactstrap';
import './App.css';
import './home.css';
import CodeEditor from './Component/CodeEditor/codeEditor'
import NavBar from './Component/NavBar/navBar'
import place_holder from './images/place_holder.png'
import tim from './images/tim_frame.png';
import melissa from './images/melissa_frame.png';
import nguyen from './images/nguyen_frame.png';
import claudia from './images/claudia_frame.png';
import linkedin_white from './images/linkedin_white.png';

import step_one from './images/camera_icon.png'
import step_two from './images/data_icon.png'
import step_three from './images/alert_icon.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <div>
            <NavBar></NavBar>
            <Switch>
              <Route path="/tutoriel" component={CodeEditor} />
              <Route path="/" component={Home} />
            </Switch>
          </div> 
        </BrowserRouter>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <About></About>
      <HomeScreen></HomeScreen>
      <Team></Team>
    </div>
  );
}
function HomeScreen() {
  
  return (
    <Container id="How" fluid>
    <Row id="RowMenu">
      <Col className="step_box">
          <img className="step_images" alt="step one" src={step_one} />
          <br />
          <div className="step_number">STEP 1</div>
          <p className="step_descriptions">Cameras are installed in optimized areas and set-up to record the number of pedestrians giving your displays attention.</p>
      </Col>
      <Col className="step_box">
          <img className="step_images" alt="step two" src={step_two} />
          <br />
          <div className="step_number">STEP 2</div>
          <p className="step_descriptions">Data is collected from pedestrians to determine the head-turn rate and is displayed on a web dashboard.</p>
      </Col>
      <Col className="step_box">
          <img className="step_images" alt="step three" src={step_three} />
          <br />
          <div className="step_number">STEP 3</div>
          <p className="step_descriptions">The web dashboard will alert the owner when statistical significance is achieved and provides results in real time.</p>
      </Col>
    </Row>
  </Container>
  );
}

function Team(){
  return ( 
    <Container id="Team" fluid>
    <h1 id="team_header">MEET THE TEAM</h1>
  <div id="team_photos">
    <Col className="team_div">
        <div className="team_headers">Developer</div>
        <img alt="claudia" src={claudia} />
        <div className="linked_descriptions">
          <a href="https://www.linkedin.com/in/claudia-ligidakis/">CLAUDIA LIGIDAKIS  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
    </Col>
    <Col className="team_div">
        <div style={{textAlign: 'center'}} className="team_headers">Data Scientist</div>
        <img alt="nguyen" src={nguyen} />
        <div className="linked_descriptions"><a href="https://www.linkedin.com/in/nguyenmngo/">NGUYEN NGO  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
    </Col>
    <Col className="team_div">
        <div style={{textAlign: 'center'}} className="team_headers">Project Manager</div>
        <img alt="tim" src={tim} />
        <div className="linked_descriptions"><a href="https://www.linkedin.com/in/timsteines/">TIM STEINES  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
    </Col>
    <Col className="team_div">
        <div style={{textAlign: 'right'}} className="team_headers">UI/UX Designer</div>
        <img alt="melissa" src={melissa} />
        <div className="linked_descriptions"><a href="https://www.linkedin.com/in/melissamkaiser/">MELISSA KAISER  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
    </Col>
  </div>
</Container>
  )
}
function About(){
  return (
                <Container id="About" fluid>
                <div id="about">
                    <Row id="RowMenu">
                        <Col id="about_image"><img className="placeHolder" alt="video_example" src={place_holder} /></Col>
                        <Col>
                            <h4 id="about_description_title">What is Measureyes and how can it help your business?</h4>
                            <div id="about_description">
                                Measureyes is an A/B testing platform that enables retailers to track the effectiveness of physical retail displays. Using computer vision and analysis, Measureyes detects when passersby give attention to a display via head turns. From the count of head turns as a ratio of total passersby, the platform produces head-turn rate (HTR) as a simple, intuitive yet powerful metric of display effectiveness much as click-thru rate (CTR) does in conventional A/B testing for digital online media.
                                <br />
                                <br />
                                Results from experiments are provided in a user-friendly dashboard. You will be alerted in real-time once the experiment results have statistical significance so that the optimal window display can be deployed right away.
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
  )
}
export default App;
