import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import Books from "./pages/Books"
import Authors from "./pages/Authors"
import AuthorDetails from "./pages/AuthorDetails"
import BookDetails from "./pages/BookDetails"
import Profile from "./pages/Profile"
import AddBook from "./pages/AddBook"
import SignOut from "./pages/SignOut";
import Process from "./pages/SignUp-Login"
// import UserContext from "./Context";
import EditBook from "./pages/EditBook"
import "./index.css"


function App() {
  // const history = useHistory();
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetchUser()
  // },[])

  // const fetchUser = () => {
    // 8.✅ Create a GET fetch that goes to '/authorized'
  //   fetch('/api/check_session')
  //     // If returned successfully set the user to state and fetch our productions
  //     .then(res => {
  //       if(res.ok){       
  //         res.json().then(user => {
  //           console.log("-----authorized user from server session -------")
  //           setUser(user)
  //         })
  //       }else{
  //         setUser(null)
  //         history.push('/process')
  //         // else set the user in state to Null
  //       }
  //     })
  // }


  // useEffect(() => {
  //   fetch('/api/check_session')
  //   .then(response => {
  //     if (response.ok) {
  //     response.json()
  //     .then((user) => {
  //     console.log(user)  
  //     setUser(user)
  //     }) 
  //     }
  //     else {
  //       setUser(null)
  //       history.push("/process")
  //     }
  //     })


    // if (user === null) {
    //   
      // fetch('/api/check_session')
      //   .then(response => {
      //     if (response.ok) {
      //       response.json().then((user) => {
      //         setUser(user)
      //         console.log(user)
      //       })
      //     }
          // else { 
          //   setUser(null) 
          
          // }
          // change so that sign in and sign up are same page
        // })
  // }, []);
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/check_session')
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            setUser(data)
          })
        } else { 
          setUser(null) 
        }
      })
}, []);

  function updateUser(user) {
    setUser(user)
  }

if (!user) {
  return (
    <div>
      <Process updateUser={updateUser}/>
    </div>
  )
}

  return (
    <Router>
      <Switch>
        {/* <Route path="/books" element={<Books/>}/>
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/author_details/:id" element={<AuthorDetails/>}/>
        <Route path="/book_details/:id" element={<BookDetails/>}/>
        <Route path="/profile" element={<Profile updateUser={updateUser} user={user}/>}/>
        <Route path="/add_book" element={<AddBook/>}/>
        <Route path="/edit_book" element={<EditBook/>}/>
        <Route path="/process" element={<Process updateUser={updateUser}/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route exact path="/" element={<Home/>}/> */}
        <Route path="/books" ><Books/></Route>
        <Route path="/authors" ><Authors/></Route>
        <Route path="/author_details/:id" ><AuthorDetails/></Route>
        <Route path="/book_details/:id" ><BookDetails/></Route>
        <Route path="/profile" ><Profile updateUser={updateUser} user={user}/></Route>
        <Route path="/add_book" ><AddBook/></Route>
        <Route path="/edit_book/:id" ><EditBook/></Route>
        <Route path="/process" ><Process updateUser={updateUser}/></Route>
        <Route path="/signout" ><SignOut/></Route>
        <Route exact path="/" ><Home/></Route>
      </Switch>
    </Router>
  );
}
export default App;
