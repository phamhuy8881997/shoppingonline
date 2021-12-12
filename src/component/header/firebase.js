import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCQyqsUXn8NXw6nRc9oL42mOfnGfHp8keY",
  authDomain: "shoping-8825e.firebaseapp.com",
  projectId: "shoping-8825e",
  storageBucket: "shoping-8825e.appspot.com",
  messagingSenderId: "249506150604",
  appId: "1:249506150604:web:92f9979c9793c8c996ea69",
  measurementId: "G-8586P1EXEL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
