const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
require("dotenv").config();

import * as admin from "firebase-admin";

const serviceAccount = require("./serverConfig/lemur-digital-firebase-adminsdk-3x58x-d3b606e077.json");

const app = express();

app.use(volleyball);
app.use(express.json());

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  ...firebaseConfig,
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
