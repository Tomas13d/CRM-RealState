"use client";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Button,
} from "@mui/material";

import Layout from "../commons/layout";
import DonutChart from "../commons/DonutChart";
import BarChart from "../commons/BarChart";
import { useEffect, useState } from "react";
import { getAllAcquisitions } from "../services/acquistion.services";
import { Acquisition } from "../types/types.md";

const Home: React.FC = () => {
  const [priceRent, setPriceRent] = useState<number[]>([]);
  const [priceSale, setPriceSale] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAcquisitions = async () => {
    try {
      const fetchedAcquisitions: Acquisition[] = await getAllAcquisitions();
      const rentPrices: number[] = [];
      const salePrices: number[] = [];

      fetchedAcquisitions.forEach((acquisition) => {
        const { transaction_type, transaction_price } = acquisition;
        if (transaction_type === "rent") {
          rentPrices.push(transaction_price);
        } else if (transaction_type === "sale") {
          salePrices.push(transaction_price);
        }
      });

      setPriceRent(rentPrices);
      setPriceSale(salePrices);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching acquisitions:", error);
      setError("Error al obtener las adquisiciones");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAcquisitions();
  }, []);

  if (isLoading) {
    return <Box>Cargando...</Box>;
  }

  if (error) {
    return <Box>{error}</Box>;
  }

  const totalSales = priceSale.reduce((acc, precio) => acc + precio, 0);
  const totalRents = priceRent.reduce((acc, precio) => acc + precio, 0);

  return (
    <Layout>
      <Container component="main" maxWidth="xl" sx={{ color: "white" }}>
        <Box
          sx={{
            width: "full",
            height: 100,
          }}
        ></Box>
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
          Resumen
        </Typography>
        <Box
          sx={{
            width: "full",
            height: 450,
            background: "#263448",
            borderRadius: "20px",
          }}
        >
          <Divider />
          <Box
            sx={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "bold",
                }}
              >
                Facturacion
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                USD$ {totalRents + totalSales}
              </Typography>
            </Grid>
            <Button
              type="submit"
              sx={{
                color: "white",
                background: "#6878d6",
                borderRadius: "25px",
                width: "25%",
                marginTop: "8px",
              }}
            >
              ver detalles
            </Button>
          </Box>
          <Grid container justifyContent="center" pt={10} pl={10} pr={10}>
            <Grid item xs={6}>
              <DonutChart
                data={[totalSales, totalRents]}
                labels={["alquileres", "ventas"]}
                colors={["#FF6384", "#36A2EB", "#FFCE56"]}
              />
            </Grid>
            <Grid item xs={6}>
              <Box mb={10}>
                <BarChart
                  data={[totalRents, totalSales]}
                  labels={["Alquileres", "Ventas"]}
                  colors={["#36A2EB", "#FF6384"]}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" sx={{ margin: "10px" }} />
        <Box
          sx={{
            width: "full",
            height: 450,
            background: "#263448",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "bold",
                }}
              >
                Captaciones
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                55/100
              </Typography>
            </Grid>
            <Button
              type="submit"
              sx={{
                color: "white",
                background: "#6878d6",
                borderRadius: "25px",
                width: "25%",
                marginTop: "8px",
              }}
            >
              ver detalles
            </Button>
          </Box>
          <Grid container justifyContent="center" pt={10} pl={10} pr={10}>
            <Grid item xs={6}>
              <DonutChart
                data={[priceRent.length, priceSale.length]}
                labels={["X", "Y", "Z"]}
                colors={["#FF6384", "#36A2EB", "#FFCE56"]}
              />
            </Grid>
            <Grid item xs={6}>
              <Box mb={10}>
                <BarChart
                  data={[priceRent.length, priceSale.length]}
                  labels={["Alquileres", "Ventas"]}
                  colors={["#FF6384", "#36A2EB"]}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
