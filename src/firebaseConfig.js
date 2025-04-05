// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC4Mk_aS6tz2HxlJ5ybntvnFVIfUClR1rk",
    authDomain: "oakhillsfarmauth.firebaseapp.com",
    projectId: "oakhillsfarmauth",
    storageBucket: "oakhillsfarmauth.firebasestorage.app",
    messagingSenderId: "266376334665",
    appId: "1:266376334665:web:243c20cc13d52c897e1e98",
    measurementId: "G-4VZ5BMZ1JF"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
