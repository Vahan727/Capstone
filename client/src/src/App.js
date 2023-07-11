import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

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
