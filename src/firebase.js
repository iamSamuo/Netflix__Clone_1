import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAr4VpCWUWIEmeY2bWAG4cOi7GeronkAJE",
    authDomain: "netflix-clone-456e3.firebaseapp.com",
    projectId: "netflix-clone-456e3",
    storageBucket: "netflix-clone-456e3.appspot.com",
    messagingSenderId: "798093686671",
    appId: "1:798093686671:web:44f8fc57fa67f410b87dfa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;