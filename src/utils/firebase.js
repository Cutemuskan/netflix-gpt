// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5makvQHAuqMGDoHJ763GS6etKQRs98QA",
  authDomain: "netflix-gpt-6fe1f.firebaseapp.com",
  projectId: "netflix-gpt-6fe1f",
  storageBucket: "netflix-gpt-6fe1f.firebasestorage.app",
  messagingSenderId: "636673133229",
  appId: "1:636673133229:web:432686cef6f2f5f9865424",
  measurementId: "G-48CKK71SLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();