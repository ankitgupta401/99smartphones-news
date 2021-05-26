importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBYUNWmTBKFV5sCeKYwa62Z4ZUDHQbkqhg",
  authDomain: "smartphones-38783.firebaseapp.com",
  databaseURL: "https://smartphones-38783.firebaseio.com",
  projectId: "smartphones-38783",
  storageBucket: "smartphones-38783.appspot.com",
  messagingSenderId: "246047712180",
  appId: "1:246047712180:web:03ea143cb351a2a7f388e1",
  measurementId: "G-5FPXMF8E9X"
  })


const messaging = firebase.messaging();
