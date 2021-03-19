import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Cours from './cours'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import TreeView from 'reactjs-treeview';
import Folder from '../icon/folder.svg'
import File from '../icon/file.svg'

require('codemirror/mode/clike/clike');

const styleOfFile = { marginLeft: '0px', marginRight: '5px' };
const styleOfFolder = { marginLeft: '5px', marginRight: '5px' };

const treeData = [
  {
    icon: <FolderIcon />,
    title: 'folder A',
    childrenNode: [
      {
        icon: <FileIcon />,
        title: 'index.js',
      },
      {
        icon: <FolderIcon />,
        title: 'components',
        // isExpanded: true,
        childrenNode: [
          {
            icon: <FileIcon />,
            title: 'Button.js',
          },
        ],
      },
    ],
  },
  {
    icon: <FileIcon />,
    title: 'index.js',
  },
];


function FolderIcon() {
  return <img style={styleOfFolder} src={Folder} width={18} height={18} />;
};
function FileIcon() {
  return <img style={styleOfFile} src={File} width={15} height={15} />;
};


class CodeEditor extends Component {
  state = {
    history: [],
    code: 'import java.io.File; \n'
      + 'import java.io.IOException;\n'
      + 'import java.io.InputStream;\n'
      + 'import javax.servlet.http.HttpServletRequest;\n'
      + 'import javax.servlet.http.HttpServletResponse;\n'

      + 'import org.springframework.http.HttpStatus;\n'
      + 'import org.springframework.http.ResponseEntity;\n'
      + 'import org.springframework.stereotype.Controller;\n'
      + 'import org.springframework.web.bind.annotation.GetMapping;\n'
      + 'import org.springframework.web.bind.annotation.PathVariable;\n'
      + 'import org.springframework.web.bind.annotation.RequestMapping;\n'
      + 'import org.springframework.web.bind.annotation.RequestMethod;\n'
      + 'import org.springframework.web.bind.annotation.ResponseBody;\n'
      + 'import org.springframework.web.servlet.ModelAndView;\n'
      + '\n'
      + '  @Controller\n'
      + '  public class HomeController {\n'
      + '\n'
      + '   @RequestMapping(value="/")\n'
      + '  public ModelAndView test(HttpServletResponse response) throws IOException{\n'
      + '    return new ModelAndView("home");\n'
      + '   }\n'
      + '\n'
      + '   @RequestMapping(value="/controller/{string}", method = RequestMethod.GET)\n'
      + '   @ResponseBody\n'
      + '   public String foo( @PathVariable("string") String string) {\n'
      + '     return string;\n'
      + '  }\n'
      + '\n'
      + '  @RequestMapping(value = "/query", method = RequestMethod.POST)\n'
      + '  public ModelAndView returnCode(HttpServletRequest request, HttpServletResponse response) throws IOException{\n'
      + '    String code = request.getParameter("code");\n'
      + '\n'
      + '    System.out.println(code);\n'
      + '\n'
      + '    return new ModelAndView("lessons");\n'
      + '  }\n'
      + '}'
  };

  addHistory = (text) => {
    this.setState((state) => {
      return {
        history: state.history.concat('- ' + text),
      };
    });
  };
  onExpandNode = ({ node }, updatedTree) => {
    this.addHistory('You expanded ' + node.title);
  };

  onCollapseNode = ({ node }, updatedTree) => {
    this.addHistory('You collapsed ' + node.title);
  };

  onClickNode = (e, { node }, updatedTree) => {
    this.addHistory('You clicked ' + node.title);
    this.state.code = node.title;
  };

  runClick = () => {
    alert("Work in Progress : le code sera validé ici")
  }

  render() {
    return (
      <div class="mt-3">
        <h2>Partie 1</h2>
        <Container className='my-5' fluid>
          <Row>
            <Col xs="2">
              <div id="RowEditor" class="card mb-4 mb-lg-0 border-secondary shadow">
                <TreeView
                  initialData={treeData}
                  onExpandNode={this.onExpandNode}
                  onCollapseNode={this.onCollapseNode}
                  onClickNode={this.onClickNode}
                  style={{
                    padding: '20px',
                  }}
                />
              </div>
            </Col>
            <Col xs="5">
              <div id="RowEditor" class="card mb-4 mb-lg-0 border-secondary shadow">
                <CodeMirror
                  className={'codeMirror'}
                  value={this.state.code}
                  options={{
                    mode: 'text/x-java',
                    lineNumbers: true
                  }}
                  onChange={(editor, data, value) => {
                  }}
                />
                
              </div>
              <Button id="RunButton" onClick={this.runClick} color="primary" size="lg">Run</Button>
            </Col>
            <Col xs="5">
              <Cours />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CodeEditor;