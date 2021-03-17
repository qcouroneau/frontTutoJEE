import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import logo from './index.png';
import './App.css';
import CodeEditor from './Component/CodeEditor/codeEditor'
import NavBar from './Component/NavBar/navBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
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


export default App;
