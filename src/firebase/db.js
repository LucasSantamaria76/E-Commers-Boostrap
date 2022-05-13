import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const initialUserDB = {
  id: '',
  nombre: '',
  email: '',
  password: '',
  direccion: '',
  telefono: '',
  imagen: '',
};

const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

const logout = () => signOut(auth);

const resetPassword = async (email) => sendPasswordResetEmail(auth, email);
