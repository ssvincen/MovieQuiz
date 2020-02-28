import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDcB6ZzdZ7C4YRwRCERX5SLCrDCYNTBQhU",
    authDomain: "glass-arcade-237209.firebaseapp.com",
    databaseURL: "https://glass-arcade-237209.firebaseio.com",
    projectId: "glass-arcade-237209",
    storageBucket: "glass-arcade-237209.appspot.com",
    messagingSenderId: "977129696048",
    appId: "1:977129696048:web:9d9232620f8aee7df576f5",
    measurementId: "G-S94MM7EVGJ"
  };
firebase.initializeApp(firebaseConfig);


export default firebase;