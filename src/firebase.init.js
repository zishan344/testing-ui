// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1ZKPxCNDtDUW7oN2YpK-409fVkWJA-4A",
  authDomain: "fir-dashboard-9c9ed.firebaseapp.com",
  projectId: "fir-dashboard-9c9ed",
  storageBucket: "fir-dashboard-9c9ed.appspot.com",
  messagingSenderId: "50519279878",
  appId: "1:50519279878:web:44745644b9fba5a3a43687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;