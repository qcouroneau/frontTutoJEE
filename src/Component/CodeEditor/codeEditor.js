import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

import NavButton from './navButton'

import TreeView from 'reactjs-treeview';
import Folder from '../icon/folder.svg'
import File from '../icon/file.svg'
import servlet from '../../images/servlet.png';

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
    code: ''
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
  render() {
    return (
      <div class="mt-3">
        <h2>Les servlets</h2>
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
                value={this.state.code}
                options={{
                  mode: 'text/x-java',
                  lineNumbers: true
                }}
                onChange={(editor, data, value) => {
                }}
              />
              </div>
            </Col>
            <Col xs="5">
              <div id="RowEditor" class="card mb-4 mb-lg-0 border-secondary shadow">
                <div class="card-body">
                  <h5 class="card-title">Les bases</h5>
                  <p class="card-text">Une servlet est un composant qui étend les fonctionnalités d'un serveur web de
                  manière portable et efficace.
                  Un serveur web héberge des classes Java servlets qui sont exécutées à
                  l'intérieur du container web. Le serveur web associe une ou plusieurs URLs à
                  chaque servlet.
                  La servlet est invoquée lorsque des requêtes HTTP utilisateur sont soumises au
                  serveur.
                  Quand la servlet reçoit une requête du client, elle génère une réponse,
                  éventuellement en utilisant la logique métier contenue dans des EJBs ou en
                  interrogeant directement une base de données. Elle retourne alors une réponse
                                    HTML ou XML au demandeur.</p> <br />
                  <p>Un développeur de servlet utilise l'API servlet pour :</p>
                  <Container>
                    <Row>
                      <Col>
                        <ul>
                          <li>Initialiser et finaliser la servlet</li>
                          <li>Accéder à l'environnement de la servlet</li>
                          <li>Recevoir ou rediriger les requêtes et envoyer les réponses</li>
                          <li>Interagir avec d'autres servlets ou composants</li>
                          <li>Maintenir les informations de sessions du client</li>
                          <li>Filtrer avant ou après traitement les requêtes et les réponses</li>
                          <li>Implémenter la sécurité sur le tiers web</li>
                        </ul>
                      </Col>
                      <Col>
                        <img style={{ width: '100%' }} alt="servlet" src={servlet} />
                      </Col>
                    </Row>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur nisi quis urna suscipit fringilla. Sed vitae velit non nibh imperdiet efficitur in et turpis. Donec tempus a arcu at sagittis. Nunc at dignissim leo, at tincidunt felis. Aenean lobortis dui vitae lorem euismod aliquet. Pellentesque ultrices ullamcorper risus, nec aliquam quam pulvinar a. Nulla malesuada bibendum est nec egestas. Ut aliquam accumsan volutpat. Vestibulum vitae consequat elit, et sollicitudin neque. Nunc metus libero, porttitor luctus sapien eu, posuere cursus quam. Pellentesque auctor neque at odio suscipit, ac tempus mauris varius. Suspendisse hendrerit nunc massa, nec bibendum libero fringilla et. Mauris eleifend ante et mi cursus, sed scelerisque dui condimentum. Integer ac ex non libero placerat dignissim. Donec non venenatis quam. Aenean vitae leo nibh.  Phasellus tristique, nisl et mollis congue, sem nulla ullamcorper nibh, cursus condimentum odio tellus a nisl. Nam eros dolor, sodales ultrices pulvinar vitae, blandit sit amet tellus. Suspendisse pulvinar nulla justo, non placerat odio bibendum eu. Praesent orci felis, pretium ac urna quis, venenatis malesuada ante. Donec non libero ultrices, lacinia quam ac, feugiat tortor. Pellentesque mollis vel ligula sodales vulputate. Aenean arcu ipsum, iaculis ut egestas sit amet, imperdiet at tellus. Aliquam erat volutpat. Nunc ac odio auctor, tincidunt est at, bibendum nisi. Integer sit amet molestie leo. Nam dignissim felis non enim varius dictum. Nulla nec libero in augue hendrerit posuere ac et sapien. Morbi dapibus tempus mi, sit amet venenatis dui luctus at. </p>
                    <Row>
                    <NavButton />
                    </Row>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CodeEditor;