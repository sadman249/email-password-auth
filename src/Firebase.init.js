// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDdTqJ-xUsoyHcRmqojZ_RxXJ1daVj7Ew",
  authDomain: "email-password-auth-53c55.firebaseapp.com",
  projectId: "email-password-auth-53c55",
  storageBucket: "email-password-auth-53c55.firebasestorage.app",
  messagingSenderId: "512896056052",
  appId: "1:512896056052:web:fcf3e1ccadf08456703ca1",
  measurementId: "G-JQ0MCPXMD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);