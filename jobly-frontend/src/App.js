import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import JoblyApi from "./JoblyAPI";
import UserDataContext from "./UserDataContext";
import decode from "jwt-decode";

/**
 * TODO: Need Not authorized component- if user navigates to jobs or companies from url bar when not logged in
 * TODO: Need not found component= if user navigates to noexistent path
 * TODO: Need Handle errors
 * TODO: clean up state???
 */

function App() {
  let tokenVal = localStorage._token || null;
  const [token, setToken] = useState(tokenVal);

  const USER_INITIAL_STATE = { _token: token,
                          userInfo: {},
                          loggedOut: true}
  const [loggedInUserData, setLoggedInUserData] = useState(USER_INITIAL_STATE);


  console.log("token", token);
  console.log("loggedInUserData", loggedInUserData);

  // login a user and store token in context & localStorage
  async function loginUser(username, password) {
    try {
      const res = await JoblyApi.logIn(username, password);
      localStorage.setItem("_token", res.token);
      // updates user data in App component state/context
      setLoggedInUserData(state => ({
        ...state,
        _token: res.token,
        loggedOut: false
      }))
    }
    catch (error) {
      // array of errors from backend
      console.log(error);
    }
  }

  // logout user, updated state/context
  function logoutUser() {
    localStorage.clear();
    setLoggedInUserData(USER_INITIAL_STATE);
  }

  // get user data from backend API
   async function getUserData(username) {
    try {
      const res = await JoblyApi.getUserInfo(username);
      setLoggedInUserData(state => ({
        ...state,
        userInfo: {...res},
        loggedOut: false
      }));
    }
    catch (error) {
      console.log(error)
    }
  }

  // check for token and logged in user data on mount
  useEffect(function checkForUser() {
    if (token && loggedInUserData.userInfo.username === undefined) {
      let { username } = decode(localStorage._token);
      getUserData(username);
    }
  }, [])

  return (
    <UserDataContext.Provider value={{ loggedInUserData, loginUser, logoutUser }}>
      <div>
        <BrowserRouter>
          <Navigation />
          <div>
            <Routes />
          </div>
        </BrowserRouter>
      </div>
    </UserDataContext.Provider>
  );
}

export default App;
