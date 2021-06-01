import React from 'react';
import ReactDom from 'react-dom'
import'./index.css'
import Booklist from './Home'
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';

import {books} from './books';
import Book from './Book';
import {greeting} from './testing/testing';
import CougarVillageI from './CougarVillageI';
import CougarVillageII from './CougarVillageII';
import MoodyTower from './MoodyTower';
import CougarPlace from './CougarPlace';
import TheQuad from './TheQuad';
import UniversityLofts from './UniversityLofts';
import CullenOaks from './CullenOaks';
import BayouOaks from './BayouOaks';
import CambridgeOaks from './CambridgeOaks';
import Navbar from './Navbar'

const ReactRouterSetup=() => {
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Booklist/>
                </Route>
                <Route path='/Cougar Village I'>
                    <CougarVillageI/>
                </Route>
                <Route path= '/Cougar Village II'>
                    <CougarVillageII/>
                </Route>
                <Route path= '/Cougar Place'>
                    <CougarPlace/>
                </Route>
                <Route path= '/Moody Tower'>
                    <MoodyTower/>
                </Route>
                <Route path= '/The Quad'>
                    <TheQuad/>
                </Route>
                <Route path= '/University Lofts'>
                    <UniversityLofts/>
                </Route>
                <Route path= '/Cullen Oaks'>
                    <CullenOaks/>
                </Route>
                <Route path= '/Bayou Oaks'>
                    <BayouOaks/>
                </Route>
                <Route path= '/Cambridge Oaks'>
                    <CambridgeOaks/>
    </Route>
            </Switch>
        </Router>
    );
};
export default ReactRouterSetup;

