import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
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

export const register = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    return message;
  }
};
