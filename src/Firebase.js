// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzZHvHedbeC4R3Qi99NF6oiQb-rb4z7OA",
  authDomain: "simplestore-cf8f3.firebaseapp.com",
  projectId: "simplestore-cf8f3",
  storageBucket: "simplestore-cf8f3.appspot.com",
  messagingSenderId: "518596437807",
  appId: "1:518596437807:web:939a18d466f9c8b583a3da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);