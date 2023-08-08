"use client";
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Layout from "../commons/layout";
import CustomList from "../commons/listCommon";
import { detalleAdminRentals } from "../services/acquistion.services";
import { AcquisitionFrond } from "../types/types.md";
import HeaderPage from "./headerPage";
import SingleRentModal from "./SingleRentModal";

const Adminrents: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rents, setRents] = useState(Array<AcquisitionFrond>);
  const columns = [
    { key: "transaction_date", label: "Fecha de inicio" },
    { key: "estate_name", label: "Propiedad" },
    { key: "button", label: "" },
  ];

  const handleGetRents = async () => {
    const fetchedRents = await detalleAdminRentals();
    setRents(fetchedRents);
  };

  useEffect(() => {
    handleGetRents();
  }, []);

  const filteredData1 = rents.filter(
    (rent: AcquisitionFrond) =>
      rent.estate?.name.toLowerCase().includes(searchQuery) ||
      rent.transaction_date.toLowerCase().includes(searchQuery)
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
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            <HeaderPage
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <CustomList
              columns={columns}
              data={filteredData1.map((rent: AcquisitionFrond) => ({
                ...rent,
                estate_name: `${rent.estate?.name}`,
                button: <SingleRentModal rentData={rent}></SingleRentModal>,
              }))}
            />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Adminrents;
