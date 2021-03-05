import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reventscourse-4cb6b.firebaseapp.com",
  projectId: "reventscourse-4cb6b",
  storageBucket: "reventscourse-4cb6b.appspot.com",
  messagingSenderId: "83978474850",
  appId: "1:83978474850:web:247f10ec0f18286e3fc83b",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
