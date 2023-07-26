"use client";
import CustomList from "../commons/listCommon";
import Layout from "../commons/layout";
import { useEffect, useState } from "react";
import { getAllAgents } from "../services/agent.services";

const AgentList = () => {
  const columns = [
    { key: "firstname", label: "Nombre" },
    { key: "lastname", label: "Apellido" },
    { key: "email", label: "N° Captaciones" }, // Acquisition number not available in DB yet.
  ];
  const [agents, setAgents] = useState([]);
  const handleGetAgents = async () => {
    const fetchedAgents = await getAllAgents();
    setAgents(fetchedAgents);
  };
  useEffect(() => {
    handleGetAgents();
  }, []);

  return (
    <Layout
      children={<CustomList columns={columns} data={agents}></CustomList>}
    ></Layout>
  );
};

export default AgentList;
