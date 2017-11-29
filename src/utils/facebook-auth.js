import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBdXuwm2NXf2BVl3qrwvWjq1460mUfB-u4",
    authDomain: "artshare-local.firebaseapp.com",
    databaseURL: "https://artshare-local.firebaseio.com",
    storageBucket: "artshare-local.appspot.com",
    messagingSenderId: "688790141056"
  };

  firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider();
