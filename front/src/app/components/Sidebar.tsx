import React from "react";
import Box from "@mui/material/Box";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PersonIcon from "@mui/icons-material/Person";
import CottageIcon from "@mui/icons-material/Cottage";
import SidebarButton from "../commons/sidebarButton";
import Link from "next/link";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 300,
        borderRight: "1px solid #ccc",
        paddingTop: 8,
        backgroundColor: "transparent",
      }}
    >
      <Box>
        <Link href="/adminRents" passHref>
          <SidebarButton
            icon={<HomeWorkIcon />}
            text="Administracion de alquileres"
          />
        </Link>
        <Link href="/agents" passHref>
          <SidebarButton icon={<PeopleAltIcon />} text="Agentes" />
        </Link>
        <Link href="/acquisitions" passHref>
          <SidebarButton icon={<RequestPageIcon />} text="Captaciones" />
        </Link>
        <Link href="/clients" passHref>
          <SidebarButton icon={<PersonIcon />} text="Clientes" />
        </Link>
        <Link href="/estates" passHref>
          <SidebarButton
            icon={<CottageIcon />}
            text="
          Propiedades"
          />
        </Link>
        <Link href="/home" passHref>
          <SidebarButton icon={<LeaderboardIcon />} text="Reportes" />
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
