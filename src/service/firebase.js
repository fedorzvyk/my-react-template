// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAepMW09GCEhP_pd4VcoXeVBS9RZKfimvE',
  authDomain: 'rick-and-morty-in.firebaseapp.com',
  projectId: 'rick-and-morty-in',
  storageBucket: 'rick-and-morty-in.appspot.com',
  messagingSenderId: '710264720366',
  appId: '1:710264720366:web:62a6d1d4b5cd0ae6835cff',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
