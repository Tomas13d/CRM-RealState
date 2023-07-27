"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import { getAllEstates } from "@/app/services/estates.services";
import { getAllBuyersAndTenants } from "@/app/services/client.services";
import { fetchUsersAccordingToLoggedUserType } from "@/app/services/user.services";
import { Client, Estate, User } from "@/app/types/types.md";
import { createNewAcquistion } from "@/app/services/acquistion.services";
import Layout from "@/app/commons/layout";
import { useSelector } from "react-redux";
import { RootState } from "@/app/states/store";
import { Roofing } from "@mui/icons-material";
const page = () => {
  const inputStyle = {
    color: "white",
    border: "1px solid white",
    borderRadius: "25px",
    padding: "4px 15px",
    margin: "15px",
    width: "100%",
  };

  const [buyerAndTenants, setBuyersAndTenants] = useState([]);
  const [estates, setEstates] = useState([]);
  const [users, setUsers] = useState([]);
  const loggedUser = useSelector((state: RootState) => state.user);
  const handleGetData = async () => {
    const fetchedEstates = await getAllEstates();
    setEstates(fetchedEstates);
    const fetchedBuyerAndTenants = await getAllBuyersAndTenants();
    setBuyersAndTenants(fetchedBuyerAndTenants);

    const fetchedUsers = await fetchUsersAccordingToLoggedUserType(
      loggedUser.type,
      loggedUser.id
    );

    setUsers(fetchedUsers);
  };

  useEffect(() => {
    handleGetData();
  }, [loggedUser.id]);

  const [newAcquisition, setNewAcquisition] = useState({
    description: "",
    estateID: "",
    buyerOrTenantID: "",
    transactionType: "",
    transactionCurrency: "",
    transactionPrice: "",
    agentID: "",
  });

  const handleInput = (e: any) => {
    setNewAcquisition((previousAcquisition) => ({
      ...previousAcquisition,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !newAcquisition.transactionCurrency ||
      !newAcquisition.transactionType
    ) {
      return alert("Por favor, completa todos los campos");
    } else {
      await createNewAcquistion(newAcquisition);
      alert("Captacion creada con exito");
    }
  };

  return (
    <Layout
      children={
        <Box display={"flex"} alignItems={"center"} sx={{ marginTop: 15 }}>
          <Box
            width={"50%"}
            flexDirection={"column"}
            padding={"10px 30px"}
            display={"flex"}
            minHeight={"100vh"}
          >
            <Typography variant="h3" sx={{ color: "white", margin: "10px" }}>
              Añadir Captación
            </Typography>
            <form onSubmit={handleSubmit}>
              <InputLabel
                htmlFor="description"
                sx={{ color: "white", paddingLeft: "20px" }}
              >
                Descripción
              </InputLabel>
              <Input
                onChange={handleInput}
                value={newAcquisition.description}
                name="description"
                sx={inputStyle}
                disableUnderline={true}
                required
              />

              <InputLabel
                htmlFor="estate"
                sx={{ color: "white", paddingLeft: "20px" }}
              >
                Propiedad asociada
              </InputLabel>
              <FormControl>
                <Select
                  onChange={handleInput}
                  value={newAcquisition.estateID}
                  name="estateID"
                  sx={inputStyle}
                  displayEmpty
                  disableUnderline
                  required
                >
                  <MenuItem value="" disabled>
                    Selecciona una propiedad
                  </MenuItem>
                  {estates.map((estate: Estate) => (
                    <MenuItem key={estate.id} value={estate.id}>
                      {estate.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <InputLabel
                htmlFor="buyerOrTenantID"
                sx={{ color: "white", paddingLeft: "20px" }}
              >
                Comprador o Inquilino asociado
              </InputLabel>
              <FormControl>
                <Select
                  onChange={handleInput}
                  value={newAcquisition.buyerOrTenantID}
                  name="buyerOrTenantID"
                  sx={inputStyle}
                  displayEmpty
                  disableUnderline
                  required
                >
                  <MenuItem value="" disabled>
                    Selecciona un cliente
                  </MenuItem>
                  {buyerAndTenants.map((client: Client) => (
                    <MenuItem key={client.id} value={client.id}>
                      {`${client.first_name} ${client.last_name}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <InputLabel
                htmlFor="agentID"
                sx={{ color: "white", paddingLeft: "20px" }}
              >
                Agente asociado
              </InputLabel>
              <FormControl>
                <Select
                  onChange={handleInput}
                  value={newAcquisition.agentID}
                  name="agentID"
                  sx={inputStyle}
                  displayEmpty
                  disableUnderline
                  required
                >
                  <MenuItem value="" disabled>
                    Selecciona un agente
                  </MenuItem>
                  {users?.map((user: User) => (
                    <MenuItem key={user.id} value={user.id}>
                      {`${user.firstname} ${user.lastname}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-around"}
                margin={"10px 0px"}
              >
                <FormControl sx={{ color: "white" }}>
                  <FormLabel id="transactionType" sx={{ color: "white" }}>
                    Tipo de operación
                  </FormLabel>
                  <RadioGroup>
                    <FormControlLabel
                      value="sale"
                      name="transactionType"
                      onClick={handleInput}
                      control={
                        <Radio
                          sx={{
                            color: "white",
                          }}
                        />
                      }
                      label="Venta"
                    />
                    <FormControlLabel
                      value="rent"
                      name="transactionType"
                      onClick={handleInput}
                      control={
                        <Radio
                          sx={{
                            color: "white",
                          }}
                        />
                      }
                      label="Alquiler"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl sx={{ color: "white" }}>
                  <FormLabel id="transactionCurrency" sx={{ color: "white" }}>
                    Tipo de cambio
                  </FormLabel>
                  <RadioGroup>
                    <FormControlLabel
                      onClick={handleInput}
                      value="USD"
                      name="transactionCurrency"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                          }}
                        />
                      }
                      label="Dólar"
                    />
                    <FormControlLabel
                      value="ARS"
                      name="transactionCurrency"
                      onClick={handleInput}
                      control={
                        <Radio
                          sx={{
                            color: "white",
                          }}
                        />
                      }
                      label="Peso argentino"
                    />
                  </RadioGroup>
                </FormControl>
                <InputLabel htmlFor="transactionPrice" sx={{ color: "white" }}>
                  Precio
                </InputLabel>
                <Input
                  onChange={handleInput}
                  value={newAcquisition.transactionPrice}
                  type="text"
                  name="transactionPrice"
                  sx={{ ...inputStyle, width: "25%" }}
                  disableUnderline={true}
                  required
                />
              </Box>

              <Button
                type="submit"
                sx={{
                  color: "white",
                  background: "#6878d6",
                  borderRadius: "25px",
                  width: "25%",
                  margin: "20px 20px",
                }}
              >
                Añadir
              </Button>
            </form>
          </Box>
        </Box>
      }
    ></Layout>
  );
};

export default page;
