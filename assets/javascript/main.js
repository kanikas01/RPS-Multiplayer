// Initialize Firebase
var config = {
  apiKey: "AIzaSyD9VTvSryNyuPx320t_49hJdNsjWQYXl_E",
  authDomain: "rps-multiplayer-3c61a.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-3c61a.firebaseio.com",
  projectId: "rps-multiplayer-3c61a",
  storageBucket: "rps-multiplayer-3c61a.appspot.com",
  messagingSenderId: "704316579170"
};

firebase.initializeApp(config);
var database = firebase.database();

// Selectors
var selectors = {};

// Classes
var classes = {};

// Events

// Helpers