import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuUL8vjc3Gb3MvuCZxZ-kkRuCVHcDL61I",
  authDomain: "wikiposts-277dc.firebaseapp.com",
  projectId: "wikiposts-277dc",
  storageBucket: "wikiposts-277dc.appspot.com",
  messagingSenderId: "869552015108",
  appId: "1:869552015108:web:1b91278892fe501a0df251",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
