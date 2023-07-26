import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  Box,
} from "@mui/material";

interface Column {
  key: string;
  label: string;
}

interface RowData {
  [key: string]: any;
}

interface CustomListProps {
  columns: Column[];
  data: RowData[];
}

const CustomList: React.FC<CustomListProps> = ({ columns, data }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Table sx={{ borderCollapse: "separate" }}>
        <TableHead sx={{ overflow: "hidden", margin: "5px" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={{
                  color: "white",
                  background: "#263448",
                  border: "none",
                  fontSize: "19px",
                }}
                key={column.key}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <Divider sx={{ margin: "5px" }} />
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  sx={{
                    color: "white",
                    background: "#15223C",
                    margin: "3px",
                    border: "none",
                    fontSize: "19px",
                  }}
                >
                  {row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CustomList;
