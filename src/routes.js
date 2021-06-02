import React from 'react';
import Booklist from './Home'
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';
import CougarVillageI from './CougarVillageI';
import CougarVillageII from './CougarVillageII';
import MoodyTower from './MoodyTower';
import CougarPlace from './CougarPlace';
import TheQuad from './TheQuad';
import UniversityLofts from './UniversityLofts';
import CullenOaks from './CullenOaks';
import BayouOaks from './BayouOaks';
import CambridgeOaks from './CambridgeOaks';

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

