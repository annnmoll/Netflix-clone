import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhMcUvAuoWgeNk2dsASULMp0gzjZ2v7sE",
    authDomain: "netflix-ea653.firebaseapp.com",
    projectId: "netflix-ea653",
    storageBucket: "netflix-ea653.appspot.com",
    messagingSenderId: "389769768614",
    appId: "1:389769768614:web:30c24a74c20229709e0e67"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ;
  const db = firebaseApp.firestore() ;
  const auth = firebase.auth() ;

  export {db , auth } ;