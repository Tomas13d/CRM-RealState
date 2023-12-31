"use client";
import React, { useState, useEffect } from "react";
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
import Layout from "../../commons/layout";
import { Client, Estate } from "../../types/types.md";
import { getAllOwners } from "../../services/client.services";
import { createNewEstate } from "../../services/estates.services";
import ProtectedRoutes from "../../components/ProtectedRoutes";
import PrimaryButton from "@/app/commons/buttons/primaryButton";

const FormularioPropiedad: React.FC = () => {
  const initialState: Estate = {
    name: "",
    address: "",
    category: "",
    city: "",
    rent_currency: "",
    sale_currency: "",
    description: "",
    expenses_price: 0,
    operation_type: "",
    is_for_rent: false,
    is_for_sale: false,
    rent_price: 0,
    sale_price: 0,
    owner_id: "",
    rooms: 0,
    owner: {
      email: "",
      first_name: "",
      last_name: "",
      is_owner: false,
      is_buyer: false,
      is_tenant: false,
    },
  };

  const [owners, setOwners] = useState([]);

  const handleGetOwners = async () => {
    const fetchedOwners = await getAllOwners();
    setOwners(fetchedOwners);
  };

  useEffect(() => {
    handleGetOwners();
  }, []);

  const [newEstate, setNewEstate] = useState<Estate>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    setNewEstate((previousEstate) => ({
      ...previousEstate,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  };

  const handleOperationType = () => {
    setNewEstate((previousEstate) => ({
      ...previousEstate,
      operation_type:
        previousEstate.is_for_rent && previousEstate.is_for_sale
          ? "rent_sale"
          : previousEstate.is_for_rent
          ? "rent"
          : previousEstate.is_for_sale
          ? "sale"
          : "",
    }));
  };

  const handleDropdowns = (event: SelectChangeEvent<string>) => {
    setNewEstate((previousEstate) => ({
      ...previousEstate,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOwnerChange = (event: SelectChangeEvent<string>) => {
    const selectedOwnerID = event.target.value;
    setNewEstate((previousEstate) => ({
      ...previousEstate,
      owner_id: selectedOwnerID,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createNewEstate(newEstate);
    alert("Propiedad agregada con éxito");
    setNewEstate(initialState);
  };
  return (
    <>
      {" "}
      <ProtectedRoutes>
        <Layout>
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              px: 4,
              py: 1,
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              background: "transparent",
              padding: 10,
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
                  <Typography variant="subtitle1">Título</Typography>
                  <TextField
                    name="name"
                    value={newEstate.name}
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
                  <Typography variant="subtitle1">Propietario</Typography>
                  <Select
                    name="owner_id"
                    onChange={handleOwnerChange}
                    value={newEstate.owner_id}
                    fullWidth
                    required
                    margin="none"
                    sx={{
                      border: "1px solid white",
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
                    <MenuItem value="" disabled>
                      Selecciona un propietario
                    </MenuItem>
                    {owners.map((owner: Client) => (
                      <MenuItem key={owner.id} value={owner.id}>
                        {`${owner.first_name} ${owner.last_name}`}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Dirección</Typography>
                  <TextField
                    name="address"
                    value={newEstate.address}
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
                  <Typography variant="subtitle1">Categoría</Typography>
                  <Select
                    name="category"
                    onChange={handleDropdowns}
                    value={newEstate.category}
                    fullWidth
                    required
                    margin="none"
                    sx={{
                      border: "1px solid white",
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
                    <MenuItem value="house">Casa</MenuItem>
                    <MenuItem value="garage">Cochera</MenuItem>
                    <MenuItem value="complex">Complejo</MenuItem>
                    <MenuItem value="flat">Departamento</MenuItem>
                    <MenuItem value="shop">Local</MenuItem>
                    <MenuItem value="office">Oficina</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Ciudad</Typography>
                  <TextField
                    name="city"
                    value={newEstate.city}
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

                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    Cantidad de ambientes
                  </Typography>
                  <TextField
                    name="rooms"
                    value={newEstate.rooms}
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
                  <FormControl
                    component="fieldset"
                    margin="normal"
                    sx={{ alignSelf: "flex-start", marginLeft: "20px" }}
                  >
                    <FormLabel component="legend" sx={{ color: "white" }}>
                      Tipo de oferta
                    </FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ color: "white" }}
                            onChange={(event) => {
                              setNewEstate((previousEstate) => ({
                                ...previousEstate,
                                is_for_sale: event.target.checked,
                              }));
                              handleOperationType();
                            }}
                            name="is_for_sale"
                            color="primary"
                          />
                        }
                        label="En venta"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ color: "white" }}
                            onChange={(event) => {
                              setNewEstate((previousEstate) => ({
                                ...previousEstate,
                                is_for_rent: event.target.checked,
                              }));
                              handleOperationType();
                            }}
                            name="is_for_rent"
                            color="primary"
                          />
                        }
                        label="En alquiler"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="subtitle1">Precio de venta</Typography>
                  <TextField
                    name="sale_price"
                    value={newEstate.sale_price}
                    onChange={handleChange}
                    fullWidth
                    required
                    disabled={!newEstate.is_for_sale}
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
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Moneda venta</Typography>
                  <Select
                    name="sale_currency"
                    onChange={handleDropdowns}
                    value={newEstate.sale_currency}
                    fullWidth
                    required
                    margin="none"
                    disabled={!newEstate.is_for_sale}
                    sx={{
                      border: "1px solid white",
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
                    <MenuItem value="ARS">Pesos argentinos</MenuItem>
                    <MenuItem value="USD">Dólar</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    Precio de alquiler
                  </Typography>
                  <TextField
                    name="rent_price"
                    value={newEstate.rent_price}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                    type="number"
                    disabled={!newEstate.is_for_rent}
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
                  <Typography variant="subtitle1">Moneda alquiler</Typography>
                  <Select
                    name="rent_currency"
                    onChange={handleDropdowns}
                    value={newEstate.rent_currency}
                    fullWidth
                    required
                    margin="none"
                    disabled={!newEstate.is_for_rent}
                    sx={{
                      border: "1px solid white",
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
                    <MenuItem value="ARS">Pesos argentinos</MenuItem>
                    <MenuItem value="USD">Dólar</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Descripción</Typography>
                  <TextField
                    name="description"
                    value={newEstate.description}
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

                <Grid item xs={12}>
                  <PrimaryButton
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
                  </PrimaryButton>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Layout>
      </ProtectedRoutes>
    </>
  );
};

export default FormularioPropiedad;
