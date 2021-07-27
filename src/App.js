import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { AppContext } from "./libs/contextLib";
import Header from "./components/header";
import Footer from "./components/footer";
import Public from "./components/public";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Home from "./components/home";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  let [users, setUsers] = useState([]);
  let [shows, setShows] = useState([]);

  users = [
    {
      id: 1,
      firstName: "josh",
      lastName: "k",
      email: "musicalbard@gmail.com",
      password: "12345678",
      watchListId: 1,
    },
  ];
  const watchLists = [
    {
      id: 1,
      showIdList: [1, 2, 3, 4, 5],
    },
    {
      id: 2,
      showIdList: [1, 2, 3, 4],
    },
  ];

  shows = [
    {
      id: 1,
      name: "Konosuba",
      description: "a show about stealing panties",
    },
    {
      id: 2,
      name: "Golden Boy",
      description: "a show about a pervert who can learn things quickly",
    },
  ];

  function checkUser(user) {
    // TODO: check if the user exists and the pw doesnt match
    console.log("loggin in with user:", user);
    const foundUser = users.filter(
      (existingUser) =>
        user.email === existingUser.email &&
        user.password === existingUser.password
    );
    if (foundUser.length > 0) {
      return true;
    }
  }

  function onSignup(user) {
    console.log("in onsignup function", user);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = {
      id,
      ...user,
    };
    setUsers([...users, newUser]);
    console.log(users);
  }

  function onDelete(id) {
    console.log("delete", id);
    setShows(shows.filter((show) => show.id !== id));
  }

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Public} />
          <Route
            path="/signup"
            render={(props) => <SignUp {...props} onSignup={onSignup} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} onLogin={checkUser} />}
          />
          <Route
            path="/home"
            render={(props) => (
              <Home {...props} shows={shows} onDelete={onDelete} />
            )}
          />
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
