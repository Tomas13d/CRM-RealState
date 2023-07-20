"use client";
import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Box,
  Grid,
  IconButton,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Layout from "../commons/layout";

interface Property {
  name: string;
  address: string;
  category: string;
  city: string;
  currency: string;
  description: string;
  expenses_price: number;
  is_for_rent: boolean;
  is_for_sale: boolean;
  rental_price?: number;
  sale_price?: number;
}

const FormularioPropiedad: React.FC = () => {
  const [property, setProperty] = useState<Property>({
    name: "",
    address: "",
    category: "",
    city: "",
    currency: "",
    description: "",
    expenses_price: 0,
    is_for_rent: false,
    is_for_sale: false,
    rental_price: 0,
    sale_price: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  };

  const handleCurrency = (event: SelectChangeEvent<string>) => {
    const selectedCurrency = event.target.value;
    setProperty((prevProperty) => ({
      ...prevProperty,
      currency: selectedCurrency,
    }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(property);
    setProperty({
      name: "",
      address: "",
      category: "",
      city: "",
      currency: "pesos",
      description: "",
      expenses_price: 0,
      is_for_rent: false,
      is_for_sale: false,
      rental_price: 0,
      sale_price: 0,
    });
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
            </IconButton>
            Ingresar Nueva Propiedad
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ margin: "20px" }}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Nombre</Typography>
                <TextField
                  name="name"
                  value={property.name}
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
                <Typography variant="subtitle1">Dirección</Typography>
                <TextField
                  name="address"
                  value={property.address}
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
                <Typography variant="subtitle1">Categoría</Typography>
                <TextField
                  name="category"
                  value={property.category}
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
                <Typography variant="subtitle1">Ciudad</Typography>
                <TextField
                  name="city"
                  value={property.city}
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
              <Grid item xs={5}>
                <Typography variant="subtitle1">Moneda</Typography>
                <Select
                  name="currency"
                  onChange={handleCurrency}
                  value={property.currency}
                  fullWidth
                  required
                  margin="none"
                  sx={{
                    borderColor: "#FFFFFF",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      "& fieldset": {
                        borderColor: "#FFFFFF",
                      },
                    },
                    color: "white",
                  }}
                >
                  <MenuItem value="pesos">Pesos argentinos</MenuItem>
                  <MenuItem value="dolar">Dólar</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  {property.is_for_rent ? "Precio de renta" : "Precio de venta"}
                </Typography>
                <TextField
                  name={property.is_for_rent ? "rental_price" : "sale_price"}
                  value={
                    property.is_for_rent
                      ? property.rental_price
                      : property.sale_price
                  }
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  type="number"
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
                <Typography variant="subtitle1">Descripción</Typography>
                <TextField
                  name="description"
                  value={property.description}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  multiline
                  rows={4}
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
              <Grid item xs={4}>
                <FormControl
                  component="fieldset"
                  margin="normal"
                  sx={{ alignSelf: "flex-start" }}
                >
                  <FormLabel component="legend" sx={{ color: "white" }}>
                    Tipo de oferta
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={property.is_for_rent}
                          onChange={(event) =>
                            setProperty((prevProperty) => ({
                              ...prevProperty,
                              is_for_rent: event.target.checked,
                            }))
                          }
                          name="is_for_rent"
                          color="primary"
                        />
                      }
                      label="En renta"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={property.is_for_sale}
                          onChange={(event) =>
                            setProperty((prevProperty) => ({
                              ...prevProperty,
                              is_for_sale: event.target.checked,
                            }))
                          }
                          name="is_for_sale"
                          color="primary"
                        />
                      }
                      label="En venta"
                    />
                  </FormGroup>
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
                  Agregar propiedad
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Layout>
    </>
  );
};

export default FormularioPropiedad;
