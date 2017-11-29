import firebase from 'firebase';

  var configdev = {
    apiKey: "AIzaSyBdXuwm2NXf2BVl3qrwvWjq1460mUfB-u4",
    authDomain: "artshare-local.firebaseapp.com",
    databaseURL: "https://artshare-local.firebaseio.com",
    storageBucket: "artshare-local.appspot.com",
    messagingSenderId: "688790141056"
  };

  var configprod = {
    apiKey: "AIzaSyA5ZENprgNqGv9Olt4zKL4w1BaXQ8bPBW0",
    authDomain: "artshare-prod.firebaseapp.com",
    databaseURL: "https://artshare-prod.firebaseio.com",
    projectId: "artshare-prod",
    storageBucket: "artshare-prod.appspot.com",
    messagingSenderId: "161535009296"
  };

  firebase.initializeApp(configprod);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();
