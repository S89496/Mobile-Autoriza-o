import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDyc_bI-Yxfxg4mRraFyUMKM6TJONTLT4",
    authDomain: "banco-13763.firebaseapp.com",
    databaseURL: "https://banco-13763-default-rtdb.firebaseio.com",
    projectId: "banco-13763",
    storageBucket: "banco-13763.appspot.com",
    messagingSenderId: "211263813629",
    appId: "1:211263813629:web:057997b4038feb808e8b94",
    measurementId: "G-P6ECTQEY4E"
  };

  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
