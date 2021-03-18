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
import javaee from './images/javaee.png'
import tim from './images/tim_frame.png';
import melissa from './images/melissa_frame.png';
import nguyen from './images/nguyen_frame.png';
import claudia from './images/claudia_frame.png';
import linkedin_white from './images/linkedin_white.png';

import react from './images/react.svg'
import spring from './images/spring.svg'
import hibernate from './images/hibernate-1.svg'

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
    </div>
  );
}
function HomeScreen() {

  return (
    <Container id="How" fluid>
      <Row class="mb-3" id="RowMenu">
        <div className="step_number">Les technologies utilisées :</div>
      </Row>
      <Row id="RowMenu">
        <Col className="step_box">
          <img className="step_images1" alt="react" src={react} />
          <br />
          <div className="step_number">React JS</div>
          <p className="step_descriptions">Bibliothèque ayant pour but de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état.</p>
        </Col>
        <Col className="step_box">
          <img className="step_images2" alt="spring" src={spring} />
          <br />
          <div className="step_number">Spring</div>
          <p className="step_descriptions">Framework open source pour construire et définir l'infrastructure d'une application Java, dont il facilite le développement et les tests.</p>
        </Col>
        <Col className="step_box">
          <img className="step_images3" alt="hibernate" src={hibernate} />
          <br />
          <div className="step_number">Hibernate</div>
          <p className="step_descriptions">Framework open source gérant la persistance des objets en base de données relationnelle. Hibernate apporte une solution aux problèmes d'adaptation entre le paradigme objet et les SGBD en remplaçant les accès à la base de données par des appels à des méthodes objet de haut niveau.</p>
        </Col>
      </Row>
    </Container>
  );
}

function Team() {
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
          <div style={{ textAlign: 'center' }} className="team_headers">Data Scientist</div>
          <img alt="nguyen" src={nguyen} />
          <div className="linked_descriptions"><a href="https://www.linkedin.com/in/nguyenmngo/">NGUYEN NGO  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
        </Col>
        <Col className="team_div">
          <div style={{ textAlign: 'center' }} className="team_headers">Project Manager</div>
          <img alt="tim" src={tim} />
          <div className="linked_descriptions"><a href="https://www.linkedin.com/in/timsteines/">TIM STEINES  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
        </Col>
        <Col className="team_div">
          <div style={{ textAlign: 'right' }} className="team_headers">UI/UX Designer</div>
          <img alt="melissa" src={melissa} />
          <div className="linked_descriptions"><a href="https://www.linkedin.com/in/melissamkaiser/">MELISSA KAISER  <img alt="linkedin_icon" className="linkedin_white" src={linkedin_white}></img></a></div>
        </Col>
      </div>
    </Container>
  )
}
function About() {
  return (
    <Container id="About" fluid>
      <div id="about">
        <Row id="RowMenu">
          <Col id="about_image"><img className="placeHolder" alt="video_example" src={javaee} /></Col>
          <Col>
            <h4 id="about_description_title">Bienvenue sur le site projet tutoriel en JEE</h4>
            <div id="about_description">
              Ce site est destiné aux néophytes en JEE qui souhaitent découvrir les bases de cet API.
              Ici , les débutants vont apprendre les notions de servlet , les Java Server Page (JSP) , l'architecture MVC et bien
              d'autres outils essentiels à la bonne comprehension du JEE<br />
              Pour aider nos programmeurs, des notions de cours seront (re)expliquées.<br />
              Aucun pré-requis n'est obligatoire mais une petite base en programmation est néamoins conseillé
              pour ne pas rester bloquer.
              </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
export default App;
