import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route path="/notFound" render={() => <div>Not Found</div>} />
      </Switch>
    </Router>
  );
}

export default Routes;
