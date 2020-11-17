import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import BooksList from "./containers/books/booksList";
import NewBook from "./containers/books/addbook";
import UpdateBook from "./containers/books/updateBook";

function Routes() {
  return (
    <Container maxWidth="sm">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Link to="/books">To List of Books</Link>}
          />
          <Route exact path="/books" render={() => <BooksList />} />
          <Route exact path="/books/new" render={() => <NewBook />} />
          <Route
            exact
            path="/books/:bookId"
            render={({
              match: {
                params: { bookId },
              },
            }) => <UpdateBook bookId={Number(bookId)} />}
          />
          <Route path="/notFound" render={() => <div>Not Found</div>} />
        </Switch>
      </Router>
    </Container>
  );
}

export default Routes;
