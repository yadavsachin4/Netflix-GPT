// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS1CWu4JOVezZZ88_JrI5OgrKcb7qS9-8",
  authDomain: "netflix-gpt-f0f7c.firebaseapp.com",
  projectId: "netflix-gpt-f0f7c",
  storageBucket: "netflix-gpt-f0f7c.appspot.com",
  messagingSenderId: "1078495015608",
  appId: "1:1078495015608:web:085d0edfeaf2a83887fa4d",
  measurementId: "G-MN8TKCK9QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();