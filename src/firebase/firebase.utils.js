import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDOA4N99dAY8QE7jMXR_baJMoep2r-xnf8",
  authDomain: "crown-db-fbd78.firebaseapp.com",
  databaseURL: "https://crown-db-fbd78.firebaseio.com",
  projectId: "crown-db-fbd78",
  storageBucket: "crown-db-fbd78.appspot.com",
  messagingSenderId: "436701785881",
  appId: "1:436701785881:web:364f6b47a9489fd5605f88",
  measurementId: "G-F2WK4YGKQB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
