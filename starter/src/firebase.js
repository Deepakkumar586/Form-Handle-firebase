import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBtLsEkfV0k_893vgyvmquPbCAjEyySvg4",
    authDomain: "fir-auth-1132-4fc4f.firebaseapp.com",
    projectId: "fir-auth-1132-4fc4f",
    storageBucket: "fir-auth-1132-4fc4f.appspot.com",
    messagingSenderId: "1089928145651",
    appId: "1:1089928145651:web:993356c84af66f790ae586",
    measurementId: "G-JGMXCT223S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth }