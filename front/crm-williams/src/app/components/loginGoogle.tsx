"use client";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

const LoginGoogle = () => {
  const handleOnClick = async () => {
    // llamamos al provedor: en este caso google.
    const googleProvider = new GoogleAuthProvider();
    // inicia sesión con Google.
    const signInWithGoogle = async (googleProvider: any) => {
      try {
        //permite iniciar sesión con una ventana emergente.
        //esta function es de firebase y requiere una autentificacion y el proveedor
        const res = await signInWithPopup(auth, googleProvider);
        // devuelve info del usuario, token, email, fullname, etc
        console.log("res: ", res);
      } catch (error) {
        console.log(error);
      }
    };
    await signInWithGoogle(googleProvider);
  };

  return (
    <>
      <button onClick={handleOnClick}> login google</button>
    </>
  );
};

export default LoginGoogle;
