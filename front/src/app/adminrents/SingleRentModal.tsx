"use client";
import * as React from "react";
import { Grid, Modal, Box, Divider } from "@mui/material";
import { H3, H5 } from "@/app/commons/headlines";

import TextField from "@mui/material/TextField";
import PrimaryButton from "@/app/commons/buttons/primaryButton";
import SecondaryButton from "../commons/buttons/secondaryButton";
import CloseSecondaryButton from "../commons/buttons/closeSecondaryButton";
import ModalBox from "@/app/commons/ModalBox";
import { AcquisitionFrond } from "@/app/types/types.md";
import { modifiedAcquisitionRent } from "../services/acquistion.services";
export default function SingleRentModal({
  rentData,
}: {
  rentData: AcquisitionFrond;
}) {
  const [price, setPrice] = React.useState(Number);
  const [open, setOpen] = React.useState(false);
  const [acquisition, setAcquisition] = React.useState(rentData);

  const handleNewPriceChange = async () => {
    const acquisitionState: AcquisitionFrond = await modifiedAcquisitionRent(
      acquisition.id,
      price
    );
    setAcquisition(acquisitionState);
    setPrice(0);
    setOpen(false);
  };
  const handlePriceChange = (e: any) => {
    const input = e.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(input)) {
      setPrice(input);
    } else {
      alert("Debe ingresar unicamente caracteres numéricos.");
    }
  };

  return (
    <>
      <Box>
        <PrimaryButton onClick={() => setOpen(true)}>
          Agregar Pago
        </PrimaryButton>
        <PrimaryButton onClick={() => setOpen(true)}>
          Modificar Precio
        </PrimaryButton>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
            <Grid container spacing={1}>
              <Grid
                item
                xs={5}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <H3 bold={true}>Modificar Precio</H3>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
              <Grid item xs={6}>
                <H5>PRECIO ACTUAL : </H5>
                <br />
                <TextField
                  value={price}
                  onChange={handlePriceChange}
                  variant="outlined"
                  size="small"
                  placeholder="                ACTUALIZAR  PRECIO                     "
                  sx={{
                    width: "100%",
                    color: "white",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "blue",
                    },
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "blue", // Contorno en color azul
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "blue",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <H5> ${" " + acquisition.transaction_price}</H5>
              </Grid>
            </Grid>
            <Divider
              sx={{ width: "95%", bgcolor: "#576B7E", margin: "5px 0px" }}
            ></Divider>
            <Grid container sx={{ margin: "20px 0px" }}>
              <Grid item xs={12}>
                <CloseSecondaryButton onClick={() => setOpen(false)}>
                  Cerrar
                </CloseSecondaryButton>
                <SecondaryButton onClick={handleNewPriceChange}>
                  Modificar Precio
                </SecondaryButton>
              </Grid>
            </Grid>
          </ModalBox>
        </Modal>
      </Box>
    </>
  );
}
