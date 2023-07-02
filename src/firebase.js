// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDOjtzyr0DGQC5H-WVQcGLougiHkmNsKkQ",
    authDomain: "clone-1bcde.firebaseapp.com",
    projectId: "clone-1bcde",
    storageBucket: "clone-1bcde.appspot.com",
    messagingSenderId: "62089544675",
    appId: "1:62089544675:web:70652098d62ee1184896d6",
    measurementId: "G-CVPEGC59HD"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db , auth};