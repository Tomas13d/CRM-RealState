import "dotenv/config.js";
import express from "express";
const cors = require("cors");
const volleyball = require("volleyball");
const PORT = process.env.port || 3001;
const app = express();
import router from "./api/routes";

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
