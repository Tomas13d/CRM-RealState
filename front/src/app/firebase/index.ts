import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import "dotenv/config.js";

const firebaseConfig = {
  apiKey: "AIzaSyDd8aiCBM1L5k3h7kC9fTnr_FQdl0VG1Xk",
  authDomain: "lemur-digital.firebaseapp.com",
  databaseURL: "https://lemur-digital-default-rtdb.firebaseio.com/",
  projectId: "lemur-digital",
  storageBucket: "lemur-digital.appspot.com",
  messagingSenderId: "982414594719",
  appId: "1:982414594719:web:6f827166621040e8b208aa",
};

export const app = initializeApp(firebaseConfig);
console.log(firebaseConfig);
export const auth = getAuth(app);
