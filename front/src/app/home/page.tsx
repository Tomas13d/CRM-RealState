"use client";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Layout from "../commons/layout";
import DonutChart from "../commons/DonutChart";
import BarChart from "../commons/BarChart";
import ProtectedRoutes from "@/app/components/ProtectedRoutes";

const Home: React.FC = () => {
  return (
    <ProtectedRoutes>
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
            <Divider />{" "}
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
                  ARS$50.890/ US$ 60.500
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
                  data={[100, 300, 60]}
                  labels={["X", "Y", "Z"]}
                  colors={["#FF6384", "#36A2EB", "#FFCE56"]}
                />
              </Grid>
              <Grid item xs={6}>
                <Box mb={10}>
                  <BarChart
                    data={[40, 20, 40]}
                    labels={["P", "Q", "R"]}
                    colors={["#FF6384", "#36A2EB", "#FFCE56"]}
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
                  data={[10, 30, 60]}
                  labels={["X", "Y", "Z"]}
                  colors={["#FF6384", "#36A2EB", "#FFCE56"]}
                />
              </Grid>
              <Grid item xs={6}>
                <Box mb={10}>
                  <BarChart
                    data={[40, 20, 40]}
                    labels={["P", "Q", "R"]}
                    colors={["#FF6384", "#36A2EB", "#FFCE56"]}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </ProtectedRoutes>
  );
};

export default Home;
