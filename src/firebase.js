import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCi2ofdFGZ088R-w5pLCZnPXl3cA4sP60w",
    authDomain: "disneyclone-993f1.firebaseapp.com",
    projectId: "disneyclone-993f1",
    storageBucket: "disneyclone-993f1.appspot.com",
    messagingSenderId: "29346411649",
    appId: "1:29346411649:web:2e7f39192e9f0fc4ac8980",
    measurementId: "G-5F8Z842893"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = getStorage(firebaseApp);


export {auth, provider, storage}

export default db;
