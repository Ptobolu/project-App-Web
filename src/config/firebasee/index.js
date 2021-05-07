import Reach from 'react';
import * as firebase from '../firebasee';


var firebaseConfig = {
    apiKey: "AIzaSyAw4At2Thp2rBLirPFvHSpCl6GFAvesYbg",
    authDomain: "project-final-56c97.firebaseapp.com",
    projectId: "project-final-56c97",
    storageBucket: "project-final-56c97.appspot.com",
    messagingSenderId: "1022030395256",
    appId: "1:1022030395256:web:b6fa06830f4b369cee7a8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;