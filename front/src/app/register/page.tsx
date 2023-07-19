"use client";
import { Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useState, ChangeEvent, FormEvent } from "react";
import "dotenv/config.js";
import { useDispatch } from "react-redux";
import { setUser } from "../states/user";
import axios from "axios";
import { Toast, Toaster, toast } from "react-hot-toast";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAgent, setIsAgent] = useState(true);

  const dispatch = useDispatch();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleAdminCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(e.target.checked);
    setIsAgent(!e.target.checked);
  };

  const handleAgentCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsAgent(e.target.checked);
    setIsAdmin(!e.target.checked);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !firstName || !lastName) {
      toast.error("Por favor, completa todos los campos");
      return;
    } else if (!isValidEmail(email)) {
      toast.error("Por favor, ingresa un correo electrónico válido");
      return;
    } else if (!isValidPassword(password)) {
      toast.error(
        "La contraseña debe contener al menos 6 caracteres, una mayúscula y un símbolo"
      );
      return;
    }

    const data = {
      email,
      password,
      firstName,
      lastName,
      isAdmin,
      isAgent,
    };
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3001/api/users/register",
    //     {
    //       email,
    //       password,
    //       firstName,
    //       lastName,
    //       isAdmin,
    //       isAgent,
    //     }
    //   );

    //   const user = response.data;
    //   dispatch(setUser(user));
    // } catch (error: any) {
    //   console.error("Error en el pedido:", error.message);
    //   toast.error("Hubo un error al registrar. Por favor, inténtalo de nuevo.");
    // }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 10,
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          background:
            "linear-gradient(45deg, rgba(38,52,72,1) 40%, rgba(72,87,146,1) 100%)",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontSize: "35px" }}>
          Registro
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid
            container
            item
            xs
            sx={{ marginTop: "15px", marginLeft: "40px" }}
          >
            Email
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            sx={{
              width: "400px",
              marginTop: "5px",
              marginLeft: "40px",
              borderColor: "#FFFFFF",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                "& fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            }}
          />
          <Grid
            container
            item
            xs
            sx={{ marginTop: "15px", marginLeft: "40px" }}
          >
            Contraseña
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
            sx={{
              width: "400px",
              marginTop: "5px",
              marginLeft: "40px",
              borderColor: "#FFFFFF",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                "& fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            }}
          />
          <Grid
            container
            item
            xs
            sx={{ marginTop: "15px", marginLeft: "40px" }}
          >
            Nombre
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            sx={{
              width: "400px",
              marginTop: "5px",
              marginLeft: "40px",
              borderColor: "#FFFFFF",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                "& fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            }}
          />
          <Grid
            container
            item
            xs
            sx={{ marginTop: "15px", marginLeft: "40px" }}
          >
            Apellido
          </Grid>
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            sx={{
              width: "400px",
              marginTop: "5px",
              marginLeft: "40px",
              borderColor: "#FFFFFF",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                "& fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            }}
          />
          <Grid
            container
            alignItems="center"
            sx={{ marginTop: "15px", marginLeft: "40px" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAdmin}
                  onChange={handleAdminCheckboxChange}
                  color="primary"
                  sx={{ color: "white", marginLeft: "50px" }}
                />
              }
              label="Administrador"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAgent}
                  onChange={handleAgentCheckboxChange}
                  color="primary"
                  sx={{ color: "white" }}
                />
              }
              label="Agente"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: "50px",
              width: "300px",
              height: "50px",
              marginLeft: "80px",
            }}
          >
            Registrar
          </Button>
        </Box>
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};

export default Register;
