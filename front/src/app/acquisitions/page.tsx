"use client";
import React, { useEffect, useState } from "react";
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
import { AcquisitionFrond } from "../types/types.md";

import PrimaryButton from "../commons/buttons/primaryButton";
import { getAllAcquisitions } from "../services/acquistion.services";
import SingleAcquisitionModal from "./SingleAcquisitionModal";
import ArrowBackButton from "../commons/buttons/arrowBackButton";
import Link from "next/link";
import columns from "./columns";

const Properties: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [acquisitions, setAcquisitions] = useState([]);

  const handleGetAcquisitions = async () => {
    const fetchedAcquisitions = await getAllAcquisitions();
    setAcquisitions(fetchedAcquisitions);
  };

  useEffect(() => {
    handleGetAcquisitions();
  }, []);
  const filteredData = acquisitions.filter(
    (acquisition: AcquisitionFrond) =>
      acquisition.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      acquisition.agent?.firstname.toLowerCase().includes(searchQuery) ||
      acquisition.owner?.first_name.toLowerCase().includes(searchQuery) ||
      acquisition.buyer?.first_name.toLowerCase().includes(searchQuery) ||
      acquisition.tenant?.first_name.toLowerCase().includes(searchQuery) ||
      acquisition.agent?.lastname.toLowerCase().includes(searchQuery) ||
      acquisition.owner?.last_name.toLowerCase().includes(searchQuery) ||
      acquisition.buyer?.last_name.toLowerCase().includes(searchQuery) ||
      acquisition.tenant?.last_name.toLowerCase().includes(searchQuery) ||
      acquisition.transaction_type.toLowerCase().includes(searchQuery)
  );

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
              <Link href="/home">
                <ArrowBackButton />
              </Link>
              Captaciones
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
                <Link href="/acquisitions/create">
                  <PrimaryButton>Añadir Captación</PrimaryButton>
                </Link>
              </Grid>
            </Grid>

            <CustomList
              columns={columns}
              data={filteredData.map(
                (acquisition: AcquisitionFrond, index: number) => ({
                  ...acquisition,
                  category: acquisition.estate.category,
                  button: (
                    <SingleAcquisitionModal acquisitionData={acquisition} />
                  ),
                })
              )}
            />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Properties;
