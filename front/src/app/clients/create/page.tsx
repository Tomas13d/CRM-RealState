"use client";
import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Layout from "../../commons/layout";

import { Client } from "../../types/types.md";
import axios from "axios";
import ProtectedRoutes from "@/app/components/ProtectedRoutes";

const ClientForm: React.FC = () => {
  const [client, setClient] = useState<Client>({
    first_name: "",
    last_name: "",
    email: "",
    is_buyer: false,
    is_owner: false,
    is_tenant: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleTipoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setClient((prevClient) => ({
      ...prevClient,
      is_buyer: value === "buyer",
      is_owner: value === "owner",
      is_tenant: value === "renter",
    }));
  };

  console.log(client);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const addedClient = await axios.post(
        "http://localhost:3001/api/clients/create",
        client
      );
      alert("Client created successfully");

      setClient({
        first_name: "",
        last_name: "",
        email: "",
        is_buyer: false,
        is_owner: false,
        is_tenant: false,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Layout>
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
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
            Ingresar Nuevo Cliente
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ margin: "20px" }}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Nombre</Typography>
                <TextField
                  name="first_name"
                  value={client.first_name}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  sx={{
                    borderColor: "#FFFFFF",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      "& fieldset": {
                        borderColor: "#FFFFFF",
                      },
                      color: "#FFFFFF",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Apellido</Typography>
                <TextField
                  name="last_name"
                  value={client.last_name}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  type="tel"
                  sx={{
                    borderColor: "#FFFFFF",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      "& fieldset": {
                        borderColor: "#FFFFFF",
                      },
                      color: "#FFFFFF",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Correo</Typography>
                <TextField
                  name="email"
                  value={client.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  type="email"
                  sx={{
                    borderColor: "#FFFFFF",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      "& fieldset": {
                        borderColor: "#FFFFFF",
                      },
                      color: "#FFFFFF",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  margin="normal"
                  sx={{ alignSelf: "flex-start" }}
                >
                  <FormLabel component="legend" sx={{ color: "white" }}>
                    Tipo de cliente
                  </FormLabel>
                  <RadioGroup
                    aria-label="tipo"
                    name="tipo"
                    value={
                      client.is_buyer
                        ? "Comprador"
                        : client.is_owner
                        ? "dueño"
                        : "inquilino"
                    }
                    onChange={handleTipoChange}
                    row
                  >
                    <FormControlLabel
                      value="dueño"
                      control={<Radio />}
                      label="Dueño"
                    />
                    <FormControlLabel
                      value="inquilino"
                      control={<Radio />}
                      label="Inquilino"
                    />
                    <FormControlLabel
                      value="Comprador"
                      control={<Radio />}
                      label="Comprador"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: "50px",
                    width: "300px",
                    height: "50px",
                    alignSelf: "flex-start",
                  }}
                >
                  Agregar cliente
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Layout>
    </>
  );
};

export default ClientForm;
