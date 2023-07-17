import * as admin from "firebase-admin";

const serverConfig = require("../../serverConfig/firebasekey.json");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = admin.initializeApp({
  credential: admin.credential.cert(serverConfig),
  ...firebaseConfig,
});

export const auth = admin.auth(app);
export const db = admin.firestore(app);
export const storage = admin.storage(app);
