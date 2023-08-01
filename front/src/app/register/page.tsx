"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import ProtectedRoute from "../components/ProtectedRoute";
import { setUser } from "../states/user";
import axios from "axios";
import { Toast, Toaster, toast } from "react-hot-toast";
import Layout from "../commons/layout";
import {
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    type: "agent",
  });

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? (checked ? "admin" : "agent") : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.email || !user.password || !user.firstname || !user.lastname) {
      toast.error("Por favor, completa todos los campos");
      return;
    } else if (!isValidEmail(user.email)) {
      toast.error("Por favor, ingresa un correo electrónico válido");
      return;
    } else if (!isValidPassword(user.password)) {
      toast.error(
        "La contraseña debe contener al menos 6 caracteres, una mayúscula y un símbolo"
      );
      return;
    }

    const data = {
      ...user,
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/register",
        data
      );

      setUser(response.data);
      dispatch(user);
    } catch (error) {
      console.error("Error en el pedido:", error);
      toast.error("Hubo un error al registrar. Por favor, inténtalo de nuevo.");
    }
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
    <>
      <ProtectedRoute>
        <Layout>
          <Container component="main" maxWidth="xl">
            <Box
              sx={{
                px: 4,
                py: 1,
                marginTop: 15,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                background: "transparent",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  fontSize: "35px",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                  marginBottom: "30px",
                  marginRight: "40px",
                  color: "white",
                }}
              >
                <IconButton
                  onClick={() => window.history.back()}
                  color="primary"
                  sx={{
                    marginRight: "10px",
                    color: "white",
                    backgroundColor: "#6878D6",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#5878D6",
                    },
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>{" "}
                Registrar nuevo usuario
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Email</Typography>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={user.email}
                      onChange={handleChange}
                      sx={{
                        width: "100%",
                        borderColor: "#FFFFFF",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                          "& fieldset": {
                            borderColor: "#FFFFFF",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Contraseña</Typography>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      type="password"
                      id="password"
                      value={user.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      sx={{
                        width: "100%",
                        borderColor: "#FFFFFF",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                          "& fieldset": {
                            borderColor: "#FFFFFF",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Nombre</Typography>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="firstname"
                      id="firstname"
                      value={user.firstname}
                      onChange={handleChange}
                      sx={{
                        width: "100%",
                        borderColor: "#FFFFFF",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                          "& fieldset": {
                            borderColor: "#FFFFFF",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Apellido</Typography>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="lastname"
                      id="lastname"
                      value={user.lastname}
                      onChange={handleChange}
                      sx={{
                        width: "100%",
                        borderColor: "#FFFFFF",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                          "& fieldset": {
                            borderColor: "#FFFFFF",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Tipo de usuario</Typography>
                    <Grid container alignItems="center">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={user.type === "admin"}
                            onChange={handleChange}
                            name="type"
                            value="admin"
                            color="primary"
                            sx={{ color: "white" }}
                          />
                        }
                        label="Administrador"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={user.type === "agent"}
                            onChange={handleChange}
                            name="type"
                            value="agent"
                            color="primary"
                            sx={{ color: "white" }}
                          />
                        }
                        label="Agente"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        borderRadius: "50px",
                        width: "100%",
                        height: "50px",
                      }}
                    >
                      Registrar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
            <Toaster position="top-right" reverseOrder={false} />
          </Container>
        </Layout>
      </ProtectedRoute>
    </>
  );
};

export default Register;
