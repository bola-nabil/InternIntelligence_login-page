import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSffbPuCkLLQJk9Q0AP1lIW1BpHxWRq3o",
  authDomain: "login-page-5d239.firebaseapp.com",
  projectId: "login-page-5d239",
  storageBucket: "login-page-5d239.firebasestorage.app",
  messagingSenderId: "859318081105",
  appId: "1:859318081105:web:b1fb5031e3e74b817a4a70",
  measurementId: "G-M9PPKTWVFC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
