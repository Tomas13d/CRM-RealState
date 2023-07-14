import React from "react";
import Box from "@mui/material/Box";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";

import SidebarButton from "../utils/sidebarButton";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 1000,
        borderLeftColor: "white",
        marginTop: 8,
        backgroundColor: "trasparent",
      }}
    >
      <div>
        <SidebarButton icon={<SignalCellularAltIcon />} text="Reportes" />
        <SidebarButton icon={<PeopleAltIcon />} text="Agentes" />
        <SidebarButton
          icon={<HomeWorkIcon />}
          text="Administracion de alquileres"
        />
        <SidebarButton icon={<PersonIcon />} text="Clientes" />

        <SidebarButton icon={<CallIcon />} text="Call center" />
        <SidebarButton icon={<AccountCircleIcon />} text="Usuarios" />
        <SidebarButton icon={<HelpIcon />} text="Ayuda" />
      </div>
    </Box>
  );
};

export default Sidebar;
