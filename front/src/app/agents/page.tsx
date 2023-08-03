"use client";
import CustomList from "../commons/listCommon";
import Layout from "../commons/layout";
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import PrimaryButton from "../commons/buttons/primaryButton";
import { useEffect, useState } from "react";
import { getAllUsers } from "../services/user.services";
import { User } from "../types/types.md";
import ProtectedRoutes from "@/app/components/ProtectedRoutes";
import columns from "./columns";

const AgentList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [agents, setAgents] = useState([]);

  const handleGetAgents = async () => {
    const fetchedUsers = await getAllUsers();
    console.log(fetchedUsers);
    setAgents(fetchedUsers.filter((user: User) => user.type === "agent"));
  };

  useEffect(() => {
    handleGetAgents();
  }, []);
  const filteredData = agents.filter((agent: User) =>
    agent.firstname.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      {" "}
      <ProtectedRoutes>
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
                Agentes
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ margin: "10px", alignItems: "center" }}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", mt: 1 }}
                  >
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
                    onChange={(e) => setSearchQuery(e.target.value)}
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

                  <PrimaryButton>Agregar Agente</PrimaryButton>
                </Grid>
              </Grid>

              <CustomList columns={columns} data={agents} />
            </Box>
          </Container>
        </Layout>
      </ProtectedRoutes>
    </>
  );
};

export default AgentList;
