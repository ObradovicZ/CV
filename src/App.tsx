import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../src/components/Home';
import Contact from "./components/Contact";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
function App() {
  return (
    <div className="app">
      <Router>
          <Row className={'h-100'}>
          <Sidebar/>
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </Row>
      </Router>
    </div>
  );
}

export default App;
