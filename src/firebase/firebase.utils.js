import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB6vfCYp3ZUX_OyR3PyyzCV2W3KGI27sBY',
  authDomain: 'crwn-db-b42a2.firebaseapp.com',
  databaseURL: 'https://crwn-db-b42a2.firebaseio.com',
  projectId: 'crwn-db-b42a2',
  storageBucket: 'crwn-db-b42a2.appspot.com',
  messagingSenderId: '530127776015',
  appId: '1:530127776015:web:ad44281728488d8b29b67a',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up google auhtentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// Always show "choose account" -pop-up when we choose the Google sign-in.
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
