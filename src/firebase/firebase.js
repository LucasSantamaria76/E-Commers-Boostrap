import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAOAZWyhTeYoMZfd1Tjh75BnmFB7gWmEMY',
  authDomain: 'e-commers-boostrap.firebaseapp.com',
  databaseURL: 'https://e-commers-boostrap-default-rtdb.firebaseio.com',
  projectId: 'e-commers-boostrap',
  storageBucket: 'e-commers-boostrap.appspot.com',
  messagingSenderId: '1059392776602',
  appId: '1:1059392776602:web:17b53250828e5f54957223',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
