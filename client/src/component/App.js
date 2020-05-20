import React, { useState, useEffect } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Landing";
import Query from "./Query";
import Unauthorized from "./Unauthorized/Unauthorized";
import Results from "./Results/Results";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/query">
          <Query />
        </Route>
        <Route exact path="/results">
          <Results />
        </Route>
        <Route exact path="/unauthorized">
          <Unauthorized />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
