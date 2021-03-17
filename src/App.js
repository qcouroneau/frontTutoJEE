import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <div>
            <NavBar></NavBar>
            <Switch>
              <Route path="/tutoriel" component={CodingScreen} />
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
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/tutoriel">Tutoriel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/qcouroneau/frontTutoJEE">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Compte
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
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
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>

              <p class="card-text">Début du Tutoriel</p>
              <p class="card-text">Début du Tutoriel</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
