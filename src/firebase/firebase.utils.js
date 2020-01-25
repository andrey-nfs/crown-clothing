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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.error('erorr creating user', error);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
