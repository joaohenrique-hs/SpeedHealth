import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Pharmacy from './pages/Pharmacy';
import Items from './pages/Items';
import ItemRegister from './pages/ItemRegister';
import ItemModify from './pages/ItemModify';

export default function routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/pharmacy" exact component={Pharmacy} />
                <Route path="/items" exact component={Items} />
                <Route path="/items/register" exact component={ItemRegister} />
                <Route path="/items/modify" exact component={ItemModify} />
            </Switch>
        </BrowserRouter>
    )
}