import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// THIS NEEDS TO BE MOVED TO ENV VARIABLES
const config = {
  apiKey: 'AIzaSyD-Bsf5gncleNUFkPy6-ZYBkfc0VWasSVM',
  authDomain: 'challenge-d45fb.firebaseapp.com',
  projectId: 'challenge-d45fb',
  storageBucket: 'challenge-d45fb.appspot.com',
  messagingSenderId: '218821532590',
  appId: '1:218821532590:web:7cf46e5d5f47669947463f',
  measurementId: 'G-ZLBMHSSRP0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // if we need more info in the future like a username
