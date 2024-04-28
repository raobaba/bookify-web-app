import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAffCqJ0owLcQ4g_VtG17IMIqTle_2cK2c",
  authDomain: "bookify-87e89.firebaseapp.com",
  projectId: "bookify-87e89",
  storageBucket: "bookify-87e89.appspot.com",
  messagingSenderId: "890600523443",
  appId: "1:890600523443:web:56be2b533a3ffbba6352c6",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  const singinUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);
  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);
  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPass,
        signinWithGoogle,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
