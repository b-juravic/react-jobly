import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import JoblyApi from "./JoblyAPI";
import UserDataContext from "./UserDataContext";
import decode from "jwt-decode";

/**
 * TODO: Need loading component and add to all components that load data
 * TODO: Need not found component= if user navigates to noexistent path
 * TODO: Need Handle errors
 */
function App() {
  let tokenVal = localStorage._joblyToken || null;
  const [token, setToken] = useState(tokenVal);

  const USER_INITIAL_STATE = {
    _token: token,
    userInfo: {},
    loggedOut: true
  }
  const [loggedInUserData, setLoggedInUserData] = useState(USER_INITIAL_STATE);

  // login a user and store token in context & localStorage
  // get user data and store in context
  async function loginUser(username, password) {
    try {
      const res = await JoblyApi.logIn(username, password);
      localStorage.setItem("_joblyToken", res.token);
      // updates user data in App component state/context
      setLoggedInUserData(state => ({
        ...state,
        _token: res.token,
        loggedOut: false
      }))
      await getUserData();
    }
    catch (error) {
      // array of errors from backend
      console.log(error);
    }
  }

  // register a user and store token in context & localStorage
  // get user data and store in context
  async function registerUser(userData) {
    try {
      const res = await JoblyApi.register(userData);
      localStorage.setItem("_joblyToken", res.token);
      setLoggedInUserData(state => ({
        ...state,
        _token: res.token,
        loggedOut: false
      }))
      await getUserData();
    }
    catch(error) {
      console.log(error);
    }
  }

  // logout user, updated state/context
  function logoutUser() {
    localStorage.clear();
    setLoggedInUserData(USER_INITIAL_STATE);
  }

  // get user data from backend API and store in context
  async function getUserData() {
    try {
      let { username } = decode(localStorage._joblyToken);
      const res = await JoblyApi.getUserInfo(username);
      setLoggedInUserData(state => ({
        ...state,
        userInfo: { ...res },
        loggedOut: false
      }));
    }
    catch (error) {
      console.log(error)
    }
  }

  // check for token and logged in user data
  useEffect(function checkForUser() {
    if (token && loggedInUserData.userInfo.username === undefined) {
      getUserData();
    }
  })

  return (
    <UserDataContext.Provider value={{ loggedInUserData, loginUser, logoutUser, registerUser, getUserData }}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <div className="container-fluid">
            <Routes />
          </div>
        </BrowserRouter>
      </div>
    </UserDataContext.Provider>
  );
}

export default App;
