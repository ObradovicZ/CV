import './sass/App.scss'
import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Sidebar from "./components/Sidebar";
import {Row} from 'react-bootstrap';
import Resume from "./components/pages/Resume";
import ContentWrapper from "./components/hoc/ContentWrapper";

function App() {
    return (
        <div className="app">
            <HashRouter basename={'/'}>
                <Row className={'h-100 w-100 mx-0'}>
                    <Sidebar/>
                    <Switch>
                        <Route path="/about">
                            <ContentWrapper title={'About'} content={<About/>}/>
                        </Route>
                        <Route path="/contact">
                            <ContentWrapper title={'My Resume'} content={<Contact/>}/>
                        </Route>
                        <Route path="/resume">
                            <ContentWrapper title={'Resume'} content={<Resume/>}/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Row>
            </HashRouter>
        </div>
    );
}

export default App;
