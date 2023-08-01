"use client";
import * as React from "react";
import { Grid, Modal, Box, Divider } from "@mui/material";
import CloseButton from "@/app/commons/buttons/closeButton";
import { H4, H5 } from "@/app/commons/headlines";
import {
  Subtitle1,
  SubtitleDesciption1,
} from "@/app/commons/subtitles/index.tsx";
import PrimaryButton from "@/app/commons/buttons/primaryButton";
import ModalBox from "@/app/commons/ModalBox";
import { AcquisitionFrond } from "@/app/types/types.md";

export default function SingleAcquisitionModal({
  acquisitionData,
}: {
  acquisitionData: AcquisitionFrond;
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
              <H4 bold={true}>{acquisitionData.description}</H4>
            </Grid>
          </Grid>
          <H5>
            Propiedad
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "10px 0px" }}
            ></Divider>
          </H5>
          <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
            <Grid item xs={6}>
              <Subtitle1>Dirección</Subtitle1>
              <SubtitleDesciption1>
                {acquisitionData.estate.address}
              </SubtitleDesciption1>
            </Grid>
            <Grid item xs={6}>
              <Subtitle1>Barrio</Subtitle1>
              <SubtitleDesciption1>
                {acquisitionData.estate.city}
              </SubtitleDesciption1>
            </Grid>
          </Grid>
          <H5>
            Operación
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "10px 0px" }}
            ></Divider>
          </H5>
          <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
            <Grid item xs={6}>
              <Subtitle1>Producto</Subtitle1>
              <SubtitleDesciption1>
                {acquisitionData.estate.category}
              </SubtitleDesciption1>
              <Subtitle1>Agente a cargo</Subtitle1>
              <SubtitleDesciption1>
                {`${acquisitionData.agent?.firstname} ${acquisitionData.agent?.lastname}`}
              </SubtitleDesciption1>
            </Grid>
            <Grid item xs={6}>
              <Subtitle1>Operación</Subtitle1>
              <SubtitleDesciption1>
                {acquisitionData.transaction_type}
              </SubtitleDesciption1>
              <Subtitle1>Fecha</Subtitle1>
              <SubtitleDesciption1>
                {acquisitionData.transaction_date}
              </SubtitleDesciption1>
            </Grid>
          </Grid>
        </ModalBox>
      </Modal>
    </Box>
  );
}
