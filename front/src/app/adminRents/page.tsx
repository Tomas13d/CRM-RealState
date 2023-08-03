"use client";
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Layout from "../commons/layout";
import CustomList from "../commons/listCommon";
import { detalleAdminRentals } from "../services/acquistion.services";
import { AcquisitionFrond } from "../types/types.md";
import HeaderPage from "./headerPage";
import SingleRentModal from "./SingleRentModal";

import ProtectedRoutes from "../../components/ProtectedRoutes";

const Adminrents: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rents, setRents] = useState(Array<AcquisitionFrond>);
  const columns = [
    { key: "tenant_full_name", label: "Inquilino" },
    { key: "agent_full_name", label: "Agente" },
    { key: "owner_full_name", label: "Propietario" },
    { key: "estate_name", label: "Propiedad" },
    { key: "transaction_date", label: "Fecha de inicio" },
    { key: "button", label: "" },
  ];

  const handleGetRents = async () => {
    const fetchedRents = await detalleAdminRentals();
    setRents(fetchedRents);
  };

  useEffect(() => {
    handleGetRents();
  }, []);

  const filteredData1 = rents.filter((rent: AcquisitionFrond) =>
    rent.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(columns[0]);
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
              alignItems: "center", // Centrar horizontalmente las columnas
              justifyContent: "center", // Centrar verticalmente las filas
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
                tenant_full_name: `${rent.tenant?.first_name} ${rent.tenant?.last_name}`,
                agent_full_name: `${rent.agent?.firstname} ${rent.agent?.lastname}`,
                owner_full_name: `${rent.owner?.first_name} ${rent.owner?.last_name}`,
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
