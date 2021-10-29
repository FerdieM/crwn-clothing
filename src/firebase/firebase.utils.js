// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBu3RqevDHKK0bMoChRGpfEnYMb1lYjOVg',
  authDomain: 'crwn-db-7c2c2.firebaseapp.com',
  projectId: 'crwn-db-7c2c2',
  storageBucket: 'crwn-db-7c2c2.appspot.com',
  messagingSenderId: '653880964738',
  appId: '1:653880964738:web:618823c928c687efaa669b',
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
