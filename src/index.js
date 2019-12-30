import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyD8pyW_6H97WQ5GPkvghUNqdmyK7mBQNK4",
    authDomain: "react-evernote-6247d.firebaseapp.com",
    databaseURL: "https://react-evernote-6247d.firebaseio.com",
    projectId: "react-evernote-6247d",
    storageBucket: "react-evernote-6247d.appspot.com",
    messagingSenderId: "812308724349",
    appId: "1:812308724349:web:80444d37bbca7b1788cf14"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
