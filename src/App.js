import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  function onAuthStateChange(callback) {
    return auth.onAuthStateChanged(user => {
      if (user) {
        callback(user);
      } else {
        callback(null);
      }
    });
  }

  useEffect(()=>{
    const unsubcribeFromAuth = onAuthStateChange(setCurrentUser)

    return ()=>{unsubcribeFromAuth()}
  },[])

  console.log("currentUser", currentUser)

  return (
    <div>
      <Header currentUser/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
