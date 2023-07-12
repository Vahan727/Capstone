import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./pages/Home"
import Books from "./pages/Books"
import Authors from "./pages/Authors"
import AuthorDetails from "./pages/AuthorDetails"
import BookDetails from "./pages/BookDetails"
import Profile from "./pages/Profile"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/authors">
          <Authors />
        </Route>
        <Route path="/author_details">
          <AuthorDetails />
        </Route>
        <Route path="/book_details">
          <BookDetails />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/* <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signout">
          <SignOut />
        </Route> */}
      </Switch>
    </Router>
  );
}
export default App;
