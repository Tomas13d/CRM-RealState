"use client";
import Layout from "../commons/layout";
import { useState } from "react";
import {
  Container,
  Input,
  Button,
  Typography,
  FormControl,
  IconButton,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";

const payment = () => {
  const inputStyle = {
    color: "white",
    border: "1px solid white",
    borderRadius: "25px",
    padding: "4px 15px",
    margin: "15px",
    width: "400px",
  };
  return (
    <>
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
                mt: 2,
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
              Pago de servicios
            </Typography>
            <FormControl sx={{ color: "white" }}>
              <FormLabel
                id="transactionCurrency"
                sx={{ color: "white", margin: "5px" }}
              >
                Seleccionar concepto
              </FormLabel>
              <RadioGroup sx={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  value="alquiler"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Alquiler"
                />
                <FormControlLabel
                  value="expensas"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Expensas"
                />
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 10px",
                    color: "grey",
                  }}
                >
                  |
                </Box>
                <FormControlLabel
                  value="agua"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Agua"
                />
                <FormControlLabel
                  value="luz"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Luz"
                />
                <FormControlLabel
                  value="gas"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Gas"
                />
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    margin: "0 10px",
                    color: "grey",
                  }}
                >
                  |
                </Box>
                <FormControlLabel
                  value="impuesto-municipal"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Impuesto Municipal"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                id="transactionCurrency"
                sx={{ color: "white", margin: "5px" }}
              >
                Monto abonado
              </FormLabel>
              <Input
                name="description"
                sx={inputStyle}
                disableUnderline={true}
                required
                type="number"
              />
            </FormControl>
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
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default payment;
