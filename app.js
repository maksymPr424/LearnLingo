// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwFERpbWrm57gii_RKQ82Jzb0u2dCC_vc",
  authDomain: "learnlingo-1abdc.firebaseapp.com",
  databaseURL:
    "https://learnlingo-1abdc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-1abdc",
  storageBucket: "learnlingo-1abdc.firebasestorage.app",
  messagingSenderId: "583081161357",
  appId: "1:583081161357:web:f344a226175fff835d68c4",
  measurementId: "G-JDWMXET591",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
