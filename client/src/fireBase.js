// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyBiEArx36uwah9ZOmM6-H3XqSTQohFOgpE",
    authDomain: "task-pro-services.firebaseapp.com",
    projectId: "task-pro-services",
    storageBucket: "task-pro-services.appspot.com",
    messagingSenderId: "374450768437",
    appId: "1:374450768437:web:6cb5f76fc2d7178b3abf7c"
})

export const auth = app.auth()
export default app