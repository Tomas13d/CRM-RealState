"use client";
import * as React from "react";
import { Grid, Modal, Box, Divider } from "@mui/material";
import CloseButton from "../commons/buttons/closeButton.tsx";
import { H4 } from "../commons/headlines/index.tsx";
import { Subtitle1, SubtitleDesciption1 } from "../commons/subtitles/index.tsx";
import PrimaryButton from "../commons/buttons/primaryButton.tsx";
import ModalBox from "../commons/ModalBox.tsx";
import { Client } from "../types/types.md.ts";

export default function SingleClientModal({
  clientData,
}: {
  clientData: Client;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <PrimaryButton onClick={handleOpen}>Ver Detalle</PrimaryButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <CloseButton onClick={handleClose} />
            </Grid>
            <Grid
              item
              xs={8}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <H4 bold={true}>Información del cliente</H4>
            </Grid>
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "10px 0px" }}
            ></Divider>
          </Grid>

          <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
            <Grid item xs={6}>
              <Subtitle1 sx={{ marginBottom: "5px" }}>Nombre</Subtitle1>
              <SubtitleDesciption1
                sx={{ marginBottom: "15px" }}
              >{`${clientData.first_name} ${clientData.last_name}`}</SubtitleDesciption1>
              <Subtitle1 sx={{ marginBottom: "5px" }}>
                Teléfono de contacto
              </Subtitle1>
              <SubtitleDesciption1 sx={{ marginBottom: "15px" }}>
                11 1234 5678
              </SubtitleDesciption1>
              <Subtitle1 sx={{ marginBottom: "5px" }}>Email</Subtitle1>
              <SubtitleDesciption1 sx={{ marginBottom: "15px" }}>
                {clientData.email}
              </SubtitleDesciption1>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"center"}>
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/128/4241/4241471.png"
                alt="client picture"
                sx={{ height: "200px", width: "auto" }}
              />
            </Grid>
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "10px 0px" }}
            ></Divider>
          </Grid>
          <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
            <Grid item xs={6}>
              <Subtitle1 sx={{ marginBottom: "5px" }}>
                Tipo de usuario
              </Subtitle1>
              <SubtitleDesciption1 sx={{ marginBottom: "15px" }}>
                {clientData.type}
              </SubtitleDesciption1>
            </Grid>

            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "20px 0px" }}
            ></Divider>
          </Grid>
          <Grid container spacing={1} sx={{ margin: "20px 0px" }}>
            <Grid item xs={12}>
              <Subtitle1 sx={{ marginBottom: "5px" }}>
                Agente asignado
              </Subtitle1>
              <SubtitleDesciption1 sx={{ marginBottom: "15px" }}>
                Don Draper{" "}
              </SubtitleDesciption1>
            </Grid>
          </Grid>
        </ModalBox>
      </Modal>
    </Box>
  );
}
