import './App.css';
import './sass/App.scss'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../src/components/Home';
import Contact from "./components/Contact";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
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
