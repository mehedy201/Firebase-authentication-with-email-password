// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp1DY4xqtFEp-2j134B2OPnaVIg_YQqnQ",
  authDomain: "fi-au-email-and-password.firebaseapp.com",
  projectId: "fi-au-email-and-password",
  storageBucket: "fi-au-email-and-password.appspot.com",
  messagingSenderId: "1005853384595",
  appId: "1:1005853384595:web:8de057750ba4bad9791266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;