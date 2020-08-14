importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then(function(registration) {
//         console.log('Registration successful, scope is:', registration.scope);
//       }).catch(function(err) {
//         console.log('Service worker registration failed, error:', err);
//       });
//     }

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

self.addEventListener("notificationclick", (event) => {
  event.waitUntil(async function () {
      const allClients = await clients.matchAll({
          includeUncontrolled: true
      });
      let chatClient;
      for (const client of allClients) {
          if (client['url'].indexOf(event.notification.data.FCM_MSG.notification.click_action) >= 0) {
              client.focus();
              chatClient = client;
              break;
          }
      }
      if (!chatClient) {
          chatClient = await clients.openWindow(event.notification.data.FCM_MSG.notification.click_action);
      }
  }());
});

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/email.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
