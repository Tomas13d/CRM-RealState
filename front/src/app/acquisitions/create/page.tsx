"use client";

import React, { useState } from "react";
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
} from "@mui/material";

const page = () => {
  const inputStyle = {
    color: "white",
    border: "1px solid white",
    borderRadius: "25px",
    padding: "4px 15px",
    margin: "15px",
    width: "100%",
  };

  const [newAcquisition, setNewAcquisition] = useState({
    description: "",
    estate: "",
    // estateCategory: "",
    // address: "",
    // rooms: 0,
    buyerOrTenant: "",
    transactionType: "",
    transactionCurrency: "",
    transactionPrice: "",
  });
  console.log(newAcquisition);
  const handleInput = (e: any) => {
    setNewAcquisition({ ...newAcquisition, [e.target.name]: e.target.value });
  };
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box
        width={"50%"}
        flexDirection={"column"}
        padding={"10px"}
        display={"flex"}
        minHeight={"100vh"}
      >
        <Typography variant="h3" sx={{ color: "white", margin: "10px" }}>
          Añadir Captación
        </Typography>
        <form onSubmit={() => {}}>
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
          />

          <InputLabel
            htmlFor="estate"
            sx={{ color: "white", paddingLeft: "20px" }}
          >
            Propiedad asociada
          </InputLabel>
          <Input
            onChange={handleInput}
            value={newAcquisition.estate}
            type="text"
            name="estate"
            sx={inputStyle}
            disableUnderline={true}
          />

          <InputLabel
            htmlFor="buyerOrTenant"
            sx={{ color: "white", paddingLeft: "20px" }}
          >
            Comprador o Inquilino asociado
          </InputLabel>
          <Input
            onChange={handleInput}
            value={newAcquisition.buyerOrTenant}
            type="text"
            name="buyerOrTenant"
            sx={inputStyle}
            disableUnderline={true}
          />

          {/* <InputLabel htmlFor="estateCategory" sx={{ color: "white" }}>
            Tipología
          </InputLabel>
          <Input
            onChange={handleInput}
            value={newAcquisition.estateCategory}
            type="text"
            name="estateCategory"
            sx={inputStyle}
            disableUnderline={true}
          />

          <InputLabel htmlFor="address" sx={{ color: "white" }}>
            Dirección
          </InputLabel>
          <Input
            onChange={handleInput}
            value={newAcquisition.address}
            type="text"
            name="address"
            sx={inputStyle}
            disableUnderline={true}
          />

          <InputLabel htmlFor="rooms" sx={{ color: "white" }}>
            Ambientes
          </InputLabel>
          <Input
            onChange={handleInput}
            value={newAcquisition.rooms}
            type="number"
            name="rooms"
            sx={inputStyle}
            disableUnderline={true}
          /> */}
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
              <FormLabel id="currency" sx={{ color: "white" }}>
                Tipo de cambio
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  onClick={handleInput}
                  value="USD"
                  name="currency"
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
                  name="currency"
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
  );
};

export default page;
