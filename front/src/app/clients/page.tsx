"use client";

import React, { useEffect, useState } from "react";
import { getAllClients } from "../services/client.services";
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import Layout from "../commons/layout";
import SearchIcon from "@mui/icons-material/Search";
import CustomList from "../commons/listCommon";
import ArrowBackButton from "../commons/buttons/arrowBackButton";
import Link from "next/link";
import PrimaryButton from "../commons/buttons/primaryButton";
import { Client } from "../types/types.md";
import columns from "./columns";

const Clients: React.FC = () => {
  const [clients, setClients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleGetAllClients = async () => {
    const fetchedClients = await getAllClients();
    setClients(fetchedClients);
  };

  useEffect(() => {
    handleGetAllClients();
  }, []);
  return (
    <>
      <Layout>
        <Container component="main" maxWidth="xl">
          <Box
            sx={{
              px: 4,
              py: 1,
              marginTop: 10,
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
              {" "}
              <Link href="/">
                <ArrowBackButton />
              </Link>
              Clientes
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ margin: "10px", alignItems: "center" }}
            >
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: "white", mt: 1 }}>
                  Buscar
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    sx: {
                      color: "white",
                      backgroundColor: "#2A3541",
                      borderRadius: "20px",
                      overflow: "hidden",
                      mt: 1,
                    },
                  }}
                  inputProps={{
                    style: { color: "white" },
                  }}
                />
                <Link href="/clients/create">
                  <PrimaryButton>Añadir Cliente</PrimaryButton>
                </Link>
              </Grid>
            </Grid>
            <CustomList
              columns={columns}
              data={clients.map((client: Client, index: number) => ({
                ...client,
              }))}
            />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Clients;
