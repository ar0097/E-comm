// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgEiHATgeVjSMR7ZZVDizACZ-zVt-mXuk",
  authDomain: "c-commerce-316a2.firebaseapp.com",
  projectId: "c-commerce-316a2",
  storageBucket: "c-commerce-316a2.firebasestorage.app",
  messagingSenderId: "499377221447",
  appId: "1:499377221447:web:a7892fafb5ddf747f22662",
  measurementId: "G-8X5K44EJDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };
