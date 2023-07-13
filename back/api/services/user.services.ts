import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { auth } from "../firebase";

interface User {
  password: string;
  email: string;
}

export const login = async (user: User) => {
  const { email, password } = user;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

export const register = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};
