'use strict';

import React from "react";
import {render} from "react-dom";
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


// pull in the ag-grid styles we're interested in
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-fresh.css";


import {Provider} from "react-redux";
import {createStore} from "redux";
// take this line out if you do not want to use ag-Grid-Enterprise
//import "ag-grid-enterprise";

import gridData from "./dataReducer";

let store = createStore(gridData);

// only necessary if you're using ag-Grid-Enterprise features
// import "ag-grid-enterprise";

// our application
import SimpleGridExample from "./SimpleGridExample";
//import DataTableGridExample from "./DataTableGridExample";

/*
<Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
  */

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
        
        <Router history={hashHistory} >
      <Route >
        <Route path="/foo" component={SimpleGridExample}/>
      </Route>
    </Router>

        </Provider>
        ,
        document.querySelector('#app')
    );
});

//      <Route path="/bar" component={DataTableGridExample}/>
