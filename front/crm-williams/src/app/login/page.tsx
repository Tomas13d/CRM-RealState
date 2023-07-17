"use client";
import { Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useState, ChangeEvent, FormEvent } from "react";
import LoginGoogle from "../components/loginGoogle";
import "dotenv/config.js";
import { useDispatch } from "react-redux";
import { setUser } from "../states/user";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, completa todos los campos");
      return;
    } else if (!isValidEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        {
          email,
          password,
        }
      );

      const user = response.data;
      dispatch(setUser(user));
    } catch (error: any) {
      console.error("Error en el pedido:", error.message);
      alert("Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          Ingresá
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
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingTop: "15px" }}
          >
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    sx={{ color: "white", marginLeft: "50px" }}
                  />
                }
                label="Recordarme"
              />
            </Grid>
            <Grid item>
              <Link href="/recovery" variant="body2" sx={{ color: "white" }}>
                ¿Olvido su contraseña?
              </Link>
            </Grid>
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
            Ingresar
          </Button>

          <Grid container>
            <Grid item sx={{ marginLeft: "110px", marginTop: "20px" }}>
              <LoginGoogle />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;