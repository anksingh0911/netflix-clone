// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_el9qeilXnjG3CK1pSZpxzY-oJ0DLw0k",
  authDomain: "netfilxclone-75044.firebaseapp.com",
  projectId: "netfilxclone-75044",
  storageBucket: "netfilxclone-75044.appspot.com",
  messagingSenderId: "771387058810",
  appId: "1:771387058810:web:bb70dd0d1f83568fbc29c3",
  measurementId: "G-55JJS24S04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
