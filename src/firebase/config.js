import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeiyNjaa8AHugiKEnXEORh4eB_EbgrpBI",
  authDomain: "mercadoclon-d2586.firebaseapp.com",
  projectId: "mercadoclon-d2586",
  storageBucket: "mercadoclon-d2586.appspot.com",
  messagingSenderId: "869297621620",
  appId: "1:869297621620:web:ff250933895c25f1e51f21",
  measurementId: "G-Z3FH79TDFB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);