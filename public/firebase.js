import firebase from 'firebase'

const config ={
    apiKey: "AIzaSyBYUNWmTBKFV5sCeKYwa62Z4ZUDHQbkqhg",
    authDomain: "smartphones-38783.firebaseapp.com",
    databaseURL: "https://smartphones-38783.firebaseio.com",
    projectId: "smartphones-38783",
    storageBucket: "smartphones-38783.appspot.com",
    messagingSenderId: "246047712180",
    appId: "1:246047712180:web:03ea143cb351a2a7f388e1",
    measurementId: "G-5FPXMF8E9X"
}


try {
  
    firebase.initializeApp(config);

}catch (err) {
    // we skip the “already exists” message which is
    // not an actual error when we’re hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
    }}

 


export default firebase;
