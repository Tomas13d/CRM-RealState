"use client";
import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Link,
  FormControl,
  FormHelperText,
} from "@mui/material";

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = (emailValue: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue.trim() === "") {
      setEmailError("Debe ingresar un email.");
    } else if (!emailRegex.test(emailValue)) {
      setEmailError("Email inválido.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!emailError && email.trim() !== "") {
      // logica del pedido con nodemailer
      setSent(true);
    }
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
          Recuperar contraseña
        </Typography>
        {sent ? (
          <Typography variant="body1" sx={{ mt: 2, color: "white" }}>
            Se ha enviado un código de recuperación a su email.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <FormControl fullWidth error={Boolean(emailError)}>
              <Grid
                container
                item
                xs
                sx={{ marginTop: "15px", marginLeft: "40px" }}
              >
                Ingrese su Email
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
              {emailError && (
                <FormHelperText sx={{ marginLeft: "40px" }}>
                  {emailError}
                </FormHelperText>
              )}
            </FormControl>
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
              Enviar código
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default PasswordRecovery;
