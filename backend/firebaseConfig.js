// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjraqavw4R88V-6qhA2_sAKF7N0k9bIyw",
  authDomain: "unihive-4988.firebaseapp.com",
  projectId: "unihive-4988",
  storageBucket: "unihive-4988.firebasestorage.app",
  messagingSenderId: "507091247808",
  appId: "1:507091247808:web:c06346d8da6f098c630325",
  measurementId: "G-Y94FQ4RWPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _DB = getFirestore(app);