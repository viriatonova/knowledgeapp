import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from '../pages/Home';
import Start from '../pages/Start';
import Result from '../pages/Result';
import Questions from '../pages/Questions';
import Page404 from '../pages/Page404';


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