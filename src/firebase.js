// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDvQ9B8zEOyYHBpPAT8kTbDWEwom7RerFk",
  authDomain: "tinder-clone-9ee05.firebaseapp.com",
  projectId: "tinder-clone-9ee05",
  storageBucket: "tinder-clone-9ee05.appspot.com",
  messagingSenderId: "742119169449",
  appId: "1:742119169449:web:b449c255bf46d4b0b4f8b8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };