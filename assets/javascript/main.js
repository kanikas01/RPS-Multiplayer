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

// Messaging
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("BBIZXWXMFrBjvjNyOwTl_RRCZEEIiy2kH-yte8-8A7FdlJbZn_nKYTvEl2mheum94umPwdp7zpbIFByKzTjhnvY");

messaging.requestPermission()
.then(function() {
  console.log('Have permission');
  return messaging.getToken();
})
.then(function(token) {
  console.log(token);
})
.catch(function(err) {
  console.log('Error occurred');
})

messaging.onMessage(function(payload) {
  console.log('onMessage: ', payload);
});

// Selectors
var selectors = {};

// Classes

// Events

// Helpers