"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Box,
  Grid,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

interface Cliente {
  nombre: string;
  correo: string;
  telefono: string;
  tipo: "dueño" | "inquilino";
}

const FormularioCliente: React.FC = () => {
  const [cliente, setCliente] = useState<Cliente>({
    nombre: "",
    correo: "",
    telefono: "",
    tipo: "dueño",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // logica del pedido
    console.log(cliente);
    // Limpia el formulario después de enviar los datos
    setCliente({
      nombre: "",
      correo: "",
      telefono: "",
      tipo: "dueño",
    });
  };

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
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
              background: "white",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                name="nombre"
                label="Nombre"
                value={cliente.nombre}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                name="correo"
                label="Correo electrónico"
                value={cliente.correo}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                type="email"
              />
              <TextField
                name="telefono"
                label="Teléfono"
                value={cliente.telefono}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                type="tel"
              />
              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Tipo de cliente</FormLabel>
                <RadioGroup
                  aria-label="tipo"
                  name="tipo"
                  value={cliente.tipo}
                  onChange={handleChange}
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
                </RadioGroup>
              </FormControl>
              <Button variant="contained" type="submit" color="primary">
                Agregar cliente
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FormularioCliente;
