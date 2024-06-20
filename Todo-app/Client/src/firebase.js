// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "todo-app-c563e.firebaseapp.com",
  projectId: "todo-app-c563e",
  storageBucket: "todo-app-c563e.appspot.com",
  messagingSenderId: "174182968975",
  appId: "1:174182968975:web:a74f86be5dafe2337a8afa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
