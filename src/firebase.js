// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDaAoja_tAOlKvplYCeUpJ7SGnWTdYw1mM",
  authDomain: "logregform-f6e92.firebaseapp.com",
  projectId: "logregform-f6e92",
  storageBucket: "logregform-f6e92.appspot.com",
  messagingSenderId: "583168735305",
  appId: "1:583168735305:web:6ca918913e97d732da6798",
  measurementId: "G-DHW24QLTKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};