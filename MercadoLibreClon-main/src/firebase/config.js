// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeiyNjaa8AHugiKEnXEORh4eB_EbgrpBI",
  authDomain: "mercadoclon-d2586.firebaseapp.com",
  projectId: "mercadoclon-d2586",
  storageBucket: "mercadoclon-d2586.appspot.com",
  messagingSenderId: "869297621620",
  appId: "1:869297621620:web:ff250933895c25f1e51f21",
  measurementId: "G-Z3FH79TDFB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);