import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
        <Route path="/author_details/:id">
          <AuthorDetails />
        </Route>
        <Route path="/book_details/:id">
          <BookDetails />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/* <Route path="/book_form">
          <AddBook />
        </Route> */}
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
