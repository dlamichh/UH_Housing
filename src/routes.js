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
import Navbar from './Navbar'

const ReactRouterSetup=() => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Booklist/>
                </Route>
                <Route path='/cougarvillage'>
                    <CougarVillageI/>
                </Route>
                <Route path= '/cougarvillage2'>
                    <CougarVillageII/>
                </Route>
            </Switch>
        </Router>
    );
};
export default ReactRouterSetup;

