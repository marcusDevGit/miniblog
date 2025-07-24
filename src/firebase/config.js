
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-c7jK5BHCgnqJV0c1DC7QDXKAMLMDv6Q",
    authDomain: "miniblog-149fb.firebaseapp.com",
    projectId: "miniblog-149fb",
    storageBucket: "miniblog-149fb.firebasestorage.app",
    messagingSenderId: "970474833141",
    appId: "1:970474833141:web:09e675877d72eaeb79f1bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const { db } = getFirestore(app)