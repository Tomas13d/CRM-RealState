import React, { useState } from "react";
import SecondaryButton from "../commons/buttons/secondaryButton";
import CloseSecondaryButton from "../commons/buttons/closeSecondaryButton";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";

interface DataRow {
  id: number;
  name: string;
  amount: number;
}
interface TableDateProps {
  price: number;
  setOpenPayment: Function;
  handleAddPaymentChange: Function;
}

const TableDate: React.FC<TableDateProps> = ({
  price,
  setOpenPayment,
  handleAddPaymentChange,
}) => {
  const num = 89;
  const data: DataRow[] = [
    { id: 1, name: "Alquiler", amount: price },
    { id: 2, name: "Luz", amount: 200 },
    { id: 3, name: "Gas", amount: 150 },
    { id: 4, name: "Agua", amount: 100 },
    { id: 5, name: "Expensas", amount: 300 },
  ];

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
  console.log(selectedRows);
  const getTotalAmount = () => {
    return selectedRows.reduce(
      (total, id) => total + (data?.find((row) => row.id === id)?.amount || 0),
      0
    );
  };

  return (
    <>
      <Grid container spacing={2} sx={{ margin: "10px 0px" }}>
        <TableContainer sx={{ borderRadius: "10px", overflow: "hidden" }}>
          <Table
            sx={{
              color: "blue",
              backgroundColor: "#00A2CE",
              border: "1px solid #00A2CE",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Monto en pesos</TableCell>
                <TableCell>Casilla</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <Checkbox
                      color="primary"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2}>Total:</TableCell>
                <TableCell>{getTotalAmount()}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container sx={{ margin: "20px 0px" }}>
        <Grid item xs={12}>
          <CloseSecondaryButton onClick={() => setOpenPayment(false)}>
            Cerrar
          </CloseSecondaryButton>
          <SecondaryButton onClick={() => handleAddPaymentChange()}>
            PAGAR
          </SecondaryButton>
        </Grid>
      </Grid>
    </>
  );
};

export default TableDate;
