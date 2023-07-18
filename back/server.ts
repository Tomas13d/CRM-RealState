const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
require("dotenv").config();
import router from "./api/routes";
const PORT = process.env.port || 3001;

const app = express();

app.use(volleyball);
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
