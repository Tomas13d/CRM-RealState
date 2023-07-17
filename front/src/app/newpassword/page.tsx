"use client";
import { useState } from "react";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  FormHelperText,
} from "@mui/material";

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    validateConfirmPassword(event.target.value);
  };

  const validatePassword = (passwordValue: string) => {
    if (passwordValue.trim() === "") {
      setPasswordError("Debe ingresar una contraseña.");
    } else if (passwordValue.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (confirmPasswordValue: string) => {
    if (confirmPasswordValue.trim() === "") {
      setConfirmPasswordError("Debe confirmar la contraseña.");
    } else if (confirmPasswordValue !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!passwordError && !confirmPasswordError && password.trim() !== "") {
      // Aquí puedes implementar la lógica para actualizar la contraseña.
      // Por simplicidad, aquí simplemente redireccionamos a la página de inicio de sesión.
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
          Nueva Contraseña
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <FormControl fullWidth error={Boolean(passwordError)}>
            <Grid
              container
              item
              xs
              sx={{ marginTop: "15px", marginLeft: "40px" }}
            >
              Nueva Contraseña
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
            {passwordError && (
              <FormHelperText sx={{ marginLeft: "40px" }}>
                {passwordError}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth error={Boolean(confirmPasswordError)}>
            <Grid
              container
              item
              xs
              sx={{ marginTop: "15px", marginLeft: "40px" }}
            >
              Confirmar Contraseña
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
            {confirmPasswordError && (
              <FormHelperText sx={{ marginLeft: "40px" }}>
                {confirmPasswordError}
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
            Actualizar Contraseña
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default NewPassword;
