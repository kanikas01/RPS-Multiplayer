importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.8.1/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyD9VTvSryNyuPx320t_49hJdNsjWQYXl_E",
  authDomain: "rps-multiplayer-3c61a.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-3c61a.firebaseio.com",
  projectId: "rps-multiplayer-3c61a",
  storageBucket: "rps-multiplayer-3c61a.appspot.com",
  messagingSenderId: "704316579170"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();