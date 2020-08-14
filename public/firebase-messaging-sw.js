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
self.addEventListener('push', function(event) {
  if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }
});

firebase.messaging().setBackgroundMessageHandler((payload) => console.log('payload', payload));


function showNotification(notification) {
  console.log(notification);
  var click_action = notification.click_action; //<-- This is correct!
  var options = {
      body: notification.body,
      icon: notification.icon,
      subtitle: notification.subtitle,
      data: {
          url: click_action
      }
  };
  if (self.registration.showNotification) {
      return self.registration.showNotification(notification.title, options);
  }
}