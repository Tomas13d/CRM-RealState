import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import "firebase/compat/auth";
import { auth, db } from "../firebase";
import { setDoc, getDoc, doc, updateDoc } from "firebase/firestore";
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

//necesito que llegue la informacion completa del usuario modificado en newInfo
export const edit = async (uid: any, newInfo: object) => {
  //extraemos la ruta donde se encuentra la el usuario
  const docRef = doc(db, "users", uid);
  //traemos el documento donde esta el usuario
  const existingDoc = await getDoc(docRef);
  //sacamos la info del user
  const existingData = existingDoc.data();
  //mergeamos la nueva data con la existente
  const mergedData = { ...existingData, ...newInfo };
  //setDoc reemplaza la info existente por mergeData
  return await setDoc(docRef, mergedData);
};

//solo la informacion modificada del usuario
export const edit2 = async (uid: any, newInfo: object) => {
  //extraemos la ruta donde se encuentra la el usuario
  const docRef = doc(db, "users", uid);
  //updateDoc solomante actuliza los datos pasados por newInfo e ignora el resto wey
  return await updateDoc(docRef, newInfo);
};
