import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Pharmacy from './pages/Pharmacy';
import Items from './pages/Items';

export default function routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pharmacy" exact component={Pharmacy} />
                <Route path="/list" exact component={Items} />
            </Switch>
        </BrowserRouter>
    )
}