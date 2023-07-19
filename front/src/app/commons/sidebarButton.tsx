"use client";
import React, { ReactNode } from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface SidebarButtonProps {
  icon: ReactNode;
  text: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, text }) => {
  return (
    <StyledListItem disablePadding>
      <ListItemButton sx={{ marginTop: "40px" }}>
        <ListItemIcon sx={{ color: "aqua" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} sx={{ color: "grey" }} />
      </ListItemButton>
    </StyledListItem>
  );
};

export default SidebarButton;
