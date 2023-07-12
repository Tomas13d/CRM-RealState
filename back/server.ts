require("dotenv").config();
import express from "express";
import cors from "cors";
const volleyball = require("volleyball");
const PORT = process.env.port || 3001;
import * as admin from "firebase-admin";
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

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const serviceAccount = require("./serverConfig/lemur-digital-firebase-adminsdk-3x58x-d3b606e077.json");

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  ...firebaseConfig,
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
