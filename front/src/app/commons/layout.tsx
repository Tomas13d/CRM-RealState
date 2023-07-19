import React from "react";
import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Grid } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
