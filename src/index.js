import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';
import * as serviceWorker from './serviceWorker';





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




/*var mainApp = {};

(function(){
  let firebase = app_fireBase;
  firebase.auth().onAuthStateChanged(function(user) {
  let uid = null
  if (user) {
    console.log("inside logged in thongs")
    uid = user.uid;
    // User is signed in.
  }
  else{
      let uid = null
          console.log("inside  notlogged in thongs")

    window.location.replace("login.html")
  }
  });
    
  function logOut(){
    console.log("inside logout")
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
})()*/
