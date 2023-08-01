"use client";
import CustomList from "../commons/listCommon";
import Layout from "../commons/layout";
import { useEffect, useState } from "react";
import { getAllUsers } from "../services/user.services";
import { User } from "../types/types.md";
import ProtectedRoutes from "@/app/components/ProtectedRoutes";
const AgentList = () => {
  const columns = [
    { key: "firstname", label: "Nombre" },
    { key: "lastname", label: "Apellido" },
    { key: "email", label: "N° Captaciones" }, // Acquisition number not available in DB yet.
  ];
  const [agents, setAgents] = useState([]);
  const handleGetAgents = async () => {
    const fetchedUsers = await getAllUsers();
    setAgents(fetchedUsers.filter((user: User) => user.type === "agent"));
  };
  useEffect(() => {
    handleGetAgents();
  }, []);

  return (
    <ProtectedRoutes>
      <Layout
        children={<CustomList columns={columns} data={agents}></CustomList>}
      ></Layout>
    </ProtectedRoutes>
  );
};

export default AgentList;
