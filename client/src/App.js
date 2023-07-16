import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import Books from "./pages/Books"
import Authors from "./pages/Authors"
import AuthorDetails from "./pages/AuthorDetails"
import BookDetails from "./pages/BookDetails"
import Profile from "./pages/Profile"
import AddBook from "./pages/AddBook"
import SignIn from "./pages/Login"
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp"
// import UserContext from "./Context";
import EditBook from "./pages/EditBook"


function App() {

  // const [user, setUser] = useState(null)

  // useEffect(() => {

  //   if (!user) {
  //     fetch('/api/check_session')
  //       .then(response => {
  //         if (response.ok) {
  //           response.json().then((user) => setUser(user))
  //         }

  //         else { setUser(null) }
  //       }
  //       )
  //   }
  // }, []);

  return (
    // <UserContext.Provider value={{ user, setUser}}>
    <Router>
      <Switch>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/author_details/:id" element={<AuthorDetails/>}/>
        <Route path="/book_details/:id" element={<BookDetails/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/add_book" element={<AddBook/>}/>
        <Route path="/edit_book" element={<EditBook/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signout" element={<SignOut/>}/>
      </Switch>
    </Router>
    // </UserContext.Provider>
  );
}
export default App;
