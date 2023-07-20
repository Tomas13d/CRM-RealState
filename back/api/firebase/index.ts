import * as admin from "firebase-admin";

//const serverConfig = require("../../serverConfig/firebasekey.json");
const serverConfig = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URL,
  token_uri: process.env.TOKEN_URL,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X500_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X500_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
};

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
  credential: admin.credential.cert(serverConfig as admin.ServiceAccount),
  ...firebaseConfig,
});

export const auth = admin.auth(app);
export const db = admin.firestore(app);
export const storage = admin.storage(app);
