// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAVJfDm7rDbARzCDTd6TJKgpz7NZEGMfI",
  authDomain: "ecom-app-27b2a.firebaseapp.com",
  projectId: "ecom-app-27b2a",
  storageBucket: "ecom-app-27b2a.appspot.com",
  messagingSenderId: "772106227686",
  appId: "1:772106227686:web:8fd5a7f508c5a2ead61027"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth};