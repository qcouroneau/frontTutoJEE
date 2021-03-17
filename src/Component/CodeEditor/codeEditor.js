import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import NavButton from './navButton'

class CodeEditor extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      code: '{"state":1, "msg":"success"}',
    }
  }
  handleChange(newCode) {
    
  }

  render() {
    const options = {
      theme: 'monokai',
      keyMap: 'sublime',
      mode: 'javascript',
      lineNumbers: true
  };
    return (
      <div>
        <h1>Bienvenue sur le Tutoriel Numéro 1 Dédié au Java JEE</h1>
        <h2>Titre du Chapitre</h2>
        <Container className='my-5' fluid>
          <Row>
            <Col>
              <CodeMirror
                value={this.state.code}
                onChange = {this.handleChange}
                options={options}
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
        <NavButton />
      </div>
    );
  }
}

export default CodeEditor;