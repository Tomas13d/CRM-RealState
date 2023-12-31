"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../states/store";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, userInitialState } from "../states/user";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3001/api/users/logout", {
        withCredentials: true,
      });

      dispatch(setUser(userInitialState));

      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#15223c" }}>
        <Toolbar>
          <Link href="/home">
            <Box
              component="img"
              src="https://media.istockphoto.com/id/1269248658/es/vector/lindo-l%C3%A9mur-divertido-sobre-un-fondo-blanco-aislado.jpg?s=612x612&w=0&k=20&c=_ogtgCUqVcQGYTPfucydV8ancnG2OuD2WfQ8av6q8Zo="
              sx={{ height: "50px", width: "80px", borderRadius: "25px" }}
              alt="logo"
            />
          </Link>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <NotificationsIcon />
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
              <MenuItem>
                <Link href={"#"} onClick={handleLogout}>
                  Cerrar sesión
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
