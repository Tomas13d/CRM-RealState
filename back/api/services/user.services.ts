import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

interface User {
  id?: string;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}

export const login = async (user: User) => {
  const { email, password } = user;

  const userCredential = await signInWithEmailAndPassword(
    firebase.auth(),
    email,
    password
  );

  return userCredential.user;
};
