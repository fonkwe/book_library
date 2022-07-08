// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCjgcVjd95GDGQia4v0jg8urmAFjjeS8w0",
  authDomain: "react-crud-app-e5588.firebaseapp.com",
  projectId: "react-crud-app-e5588",
  storageBucket: "react-crud-app-e5588.appspot.com",
  messagingSenderId: "171444724641",
  appId: "1:171 444724641:web:a43f83896c7f0237d761e0",
  measurementId: "G-LY680NLTZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);