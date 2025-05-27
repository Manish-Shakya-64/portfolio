// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDXnwfIedTnbYU2sSkYAJrc_jPcciDWNtI",
  authDomain: "my-portfolio-7509a.firebaseapp.com",
  projectId: "my-portfolio-7509a",
  storageBucket: "my-portfolio-7509a.firebasestorage.app",
  messagingSenderId: "209119767391",
  appId: "1:209119767391:web:955bd68dd5c55cfd13a4ea",
  measurementId: "G-9N0TY331BT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
const db = getFirestore(app);

export { db };
