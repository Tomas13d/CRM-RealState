"use client";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Google as GoogleIcon } from "@mui/icons-material";

const GoogleButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#DB4437",
  color: "white",
  "&:hover": {
    backgroundColor: "#c5372b",
  },
});
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
        
      } catch (error) {
        
      }
    };
    await signInWithGoogle(googleProvider);
  };

  return (
    <>
      <GoogleButton
        variant="contained"
        onClick={handleOnClick}
        sx={{ borderRadius: "50px" }}
      >
        <GoogleIcon sx={{ marginRight: "10px" }} />
        Iniciar sesión con Google
      </GoogleButton>
    </>
  );
};

export default LoginGoogle;
