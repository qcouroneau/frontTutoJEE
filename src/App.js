import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import CodeEditor from './Component/CodeEditor/codeEditor'
import NavBar from './Component/NavBar/navBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <div>
            <NavBar></NavBar>
            <Switch>
              <Route path="/tutoriel" component={CodeEditor} />
              <Route path="/" component={HomeScreen} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  );
}

function CodingScreen() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <CodeMirror
            value="CUL"//{code}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              fullScreen: true,
              mode: 'jsx',
            }}
          />
        </Col>
        <Col>
          <div class="card mb-4 mb-lg-0 border-primary shadow">
            <div class="card-body">
              <h5 class="card-title">Tutoriel Numéro 1</h5>
              <p class="card-text">Début du Tutoriel</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
