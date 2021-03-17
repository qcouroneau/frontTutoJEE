import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

function CodeEditor() {
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

export default CodeEditor;