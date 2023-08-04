"use client";
import * as React from "react";
import { Grid, Modal, Box, Divider } from "@mui/material";
import { H3, H5 } from "../commons/headlines";

import TextField from "@mui/material/TextField";
import PrimaryButton from "../commons/buttons/primaryButton";
import SecondaryButton from "../commons/buttons/secondaryButton";
import CloseSecondaryButton from "../commons/buttons/closeSecondaryButton";
import ModalBox from "../commons/ModalBox";
import { AcquisitionFrond } from "../types/types.md";
import { modifiedAcquisitionRent } from "../services/acquistion.services";
import TableDate from "./columnDate";
import BasicAlerts from "./alert";
import { postPaymentRentAcquisitions } from "../services/acquistion.services";

export default function SingleRentModal({
  rentData,
}: {
  rentData: AcquisitionFrond;
}) {
  const [showAlert, setShowAlert] = React.useState(false);
  const [price, setPrice] = React.useState(Number);
  const [open, setOpen] = React.useState(false);
  const [openPayment, setOpenPayment] = React.useState(false);
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
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  const handleAddPaymentChange = async () => {
    await postPaymentRentAcquisitions(
      acquisition.id,
      acquisition.transaction_price
    );
    setOpen(false);
  };
  return (
    <>
      <Box>
        <PrimaryButton onClick={() => setOpenPayment(true)}>
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
                <H5 bold={true}>Actulice el monto mensual</H5>
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
                      borderColor: "blue",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "blue",
                    },
                  }}
                />
                {showAlert && <BasicAlerts />}
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

        <Modal
          open={openPayment}
          onClose={() => setOpenPayment(false)}
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
                <H3 bold={true}>Agregar Pago</H3>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
              <TableDate
                price={acquisition.transaction_price}
                setOpenPayment={setOpenPayment}
                handleAddPaymentChange={handleAddPaymentChange}
              ></TableDate>
            </Grid>
          </ModalBox>
        </Modal>
      </Box>
    </>
  );
}
