import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import PrivateRoute from "./Components/PrivateRoute"
import Logout from "./Components/Logout"
import Login from "./Components/Login"
import AddFriend from "./Components/AddFriend"
import FriendsList from "./Components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2> Friends Database </h2>
          <Link className="Link" to='login'>Login</Link>
          <Link className="Link" to='friends'>Friends List</Link>
          <Link className="Link" to='friends/add'>Add Friends</Link>
          <Link className="Link" to=''>Logout</Link>
        </header>

        <Route exact path="/">{/*Default*/}
          <Login />
        </Route>

        <Route path="/login">
          <Redirect to="/" /> {/*Just go back to main page*/}
        </Route>

        <PrivateRoute exact path="/friends">
          <FriendsList />
        </PrivateRoute>

        <PrivateRoute exact path="/friends/add" component={AddFriend} />

        <PrivateRoute exact path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;
