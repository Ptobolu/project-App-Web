
// import React from 'react';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCs5dhRkFzfD5ATaMueTgpAgCYJY1uo8PI",
    authDomain: "project-final-212b7.firebaseapp.com",
    projectId: "project-final-212b7",
    storageBucket: "project-final-212b7.appspot.com",
    messagingSenderId: "259135077396",
    appId: "1:259135077396:web:1d5e8af7206bf7f3ee7b01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

// export const firebaseui = {
//     signInFlow: 'popup',
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//       ],
//     };
// firebase.initializeApp(config);


// export default firebase;
