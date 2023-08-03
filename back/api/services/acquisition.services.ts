import "firebase/compat/auth";
import { db } from "../firebase";
import { Acquisition, AcquisitionData, Client, Estate, User } from "./types.md";
import { getUserID } from "./user.services";
import { getClientID } from "./client.services";
import { getEstateID } from "./estates.services";
import { removeUndefined } from "../utils/utils";

export const createAcquisition = async (acquisition: AcquisitionData) => {
  const { agent_id, owner_id, buyer_id, tenant_id, estate_id } = acquisition;
  const agent = (await getUserID(agent_id)) as User;
  const owner = (await getClientID(owner_id)) as Client;
  const buyer = buyer_id
    ? ((await getClientID(buyer_id)) as Client)
    : undefined;
  const tenant = tenant_id
    ? ((await getClientID(tenant_id)) as Client)
    : undefined;

  const estate = (await getEstateID(estate_id)) as Estate;

  const newAcquistion: Acquisition = {
    description: acquisition.description,
    agent: agent,
    owner: owner,
    buyer: buyer,
    tenant: tenant,
    estate: estate,
    transaction_type: acquisition.transaction_type,
    transaction_price: acquisition.transaction_price,
    transaction_currency: acquisition.transaction_currency,
    transaction_date: acquisition.transaction_date,
  };
  const CleanAcquistion = removeUndefined(newAcquistion);

  const response = await db.collection("Acquisitions").add(CleanAcquistion);
  return response;
};

export const getAcquisitions = async () => {
  const acquisitionsRef = db.collection("Acquisitions");
  const snapshot = await acquisitionsRef.get();
  const acquisitions: Acquisition[] = snapshot.docs.map(
    (doc) => doc.data() as Acquisition
  );
  return acquisitions;
};

export const getAllAcquisitionsSales = async () => {
  const acquisitionsRef = db.collection("Acquisitions");
  const snapshot = await acquisitionsRef.get();
  const acquisitions: Acquisition[] = snapshot.docs
    .map((doc) => doc.data() as Acquisition)
    .filter((acquisition) => acquisition.transaction_type == "sale");

  return acquisitions;
};

export const getAllAcquisitionsRents = async () => {
  const snapshot = await db.collection("Acquisitions").get();
  const getAllAcquisitions: Acquisition[] = snapshot.docs.map((doc) => {
    return { ...(doc.data() as Acquisition), id: doc.id };
  });
  const acquisitions = getAllAcquisitions.filter(
    (acquisition) => acquisition.transaction_type == "rent"
  );

  return acquisitions;
};

export const postModifiedPrice = async (uid: string, newPrice: number) => {
  const acquisitionsRef = await db.collection("Acquisitions").doc(uid);
  const newDate = { transaction_price: newPrice };
  let updatedDoc;
  await acquisitionsRef.update(newDate);
  await acquisitionsRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      updatedDoc = {
        ...(docSnapshot.data() as Acquisition),
        id: docSnapshot.id,
      };
      console.log("Documento actualizado:", updatedDoc);
    } else {
      console.log("El documento no existe.");
    }
  });
  return updatedDoc;
};

export const postPaymentRent = async (uid: string, amount: number) => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const currentMonth = months[newDate.getMonth()];
  const newDocId = currentMonth;

  const newDocDate: NewDoc = {
    amount: amount,
    month: currentMonth,
    year: year,
    payment_date: newDate,
  };

  const exist = await checkCollectionExists(uid, "Billing");
  const docFatherRef = await db.collection("Acquisitions").doc(uid);

  if (exist) {
    const response = await docFatherRef
      .collection("Billing")
      .doc(newDocId)
      .set(newDocDate);
    return response;
  } else {
    const newColletionRef = await docFatherRef.collection("Billing");
    const response = await newColletionRef.doc(newDocId).set(newDocDate);
    return response;
  }
};

async function checkCollectionExists(
  documentId: string,
  collectionName: string
) {
  try {
    const documentRef = db.collection("Acquisitions").doc(documentId);
    const collections = await documentRef.listCollections();
    const collectionExists = collections.some(
      (collection) => collection.id === collectionName
    );
    return collectionExists;
  } catch (error) {
    console.error("Error al verificar si existe la colección:", error);
    return false;
  }
}
interface NewDoc {
  amount: number;
  month: string;
  payment_date: Date;
  year: number;
}
