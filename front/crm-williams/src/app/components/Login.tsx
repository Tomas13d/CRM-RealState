"use client";
import { Button, TextField } from "@mui/material";
import React, { useState, ChangeEvent, FormEvent } from "react";
import LoginGoogle from "./loginGoogle";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    setEmail("");
    setPassword("");
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#263448",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <TextField
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <br />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ backgroundColor: "#6878D6" }}
      >
        Ingresar
      </Button>
      <LoginGoogle />
    </form>
  );
}
