import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";

function Routes() {
  return (
    <Container maxWidth="sm">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path="/notFound" render={() => <div>Not Found</div>} />
        </Switch>
      </Router>
    </Container>
  );
}

export default Routes;
