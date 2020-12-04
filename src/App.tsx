import './App.css';
import './sass/App.scss'
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Sidebar from "./components/Sidebar";
import {Row} from 'react-bootstrap';
import Resume from "./components/pages/Resume";

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
                        <Route path="/resume">
                            <Resume/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Row>
            </Router>
        </div>
    );
}

export default App;
