import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import 'codemirror/lib/codemirror.css';
import NavButton from './navButton'

import TreeView from 'reactjs-treeview';
import Folder from '../icon/folder.svg'
import File from '../icon/file.svg'

const styleOfFile = { marginLeft: '0px', marginRight: '5px' };
const styleOfFolder = { marginLeft: '5px', marginRight: '5px' };

const treeData = [
  {
    icon: <FolderIcon />,
    title:
      'This is a folder that has really really really really really really long name',
    childrenNode: ['README.md', '_test_.js'].map((x) => ({
      icon: <FileIcon />,
      title: x,
    })),
  },
  {
    icon: <FolderIcon />,
    title: 'folder A',
    childrenNode: ['a.css', 'b.js', 'c.txt'].map((x) => ({
      icon: <FileIcon />,
      title: x,
    })),
    isExpanded: true,
  },
  {
    icon: <FileIcon />,
    title: 'index.js',
  },
  {
    icon: <FolderIcon />,
    title: 'folder B',
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
          {
            icon: <FolderIcon />,
            title: 'TextInput',
            isExpanded: true,
            childrenNode: [
              'InputNumber.js',
              'InputDate.js',
              'Input.js',
            ].map((x) => ({ icon: <FileIcon />, title: x })),
          },
        ],
      },
    ],
    isExpanded: true,
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
  };
  render() {
    const options = {
      theme: 'monokai',
      keyMap: 'sublime',
      mode: "text/x-java",
      lineNumbers: true
    };
    return (
      <div>
        <h1>Bienvenue sur le Tutoriel Numéro 1 Dédié au Java JEE</h1>
        <h2>Titre du Chapitre</h2>
        <Container className='my-5' fluid>
          <Row>
            <Col>
                <TreeView
                  initialData={treeData}
                  onExpandNode={this.onExpandNode}
                  onCollapseNode={this.onCollapseNode}
                  onClickNode={this.onClickNode}
                  style={{
                    backgroundColor: '#e5e5e5',
                    width: 300,
                    height: window.innerHeight,
                  }}
                />
            </Col>
            <Col>
              <CodeMirror
                value={this.state.code}
                onChange={this.handleChange}
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