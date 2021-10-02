import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../components/Home';
import Start from '../components/Start';
import Result from '../components/Result';
import Questions from '../components/Questions';
import Page404 from '../components/Page404';


export default function Rountes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/start' component={Start} />
                <Route exact path='/result' component={Result} />
                <Route exact path='/questions' component={Questions} />
                <Route path='*' component={Page404} />
            </Switch>
        </BrowserRouter>
    );
}