import "firebase/compat/auth";
import { db } from "../firebase";
import {
  Acquisition,
  AcquisitionData,
  Client,
  Estate,
  User,
  CreateDocAcquisitions,
} from "./types.md";
import { getUserID } from "./user.services";
import { getClientID } from "./client.services";
import { getEstateID } from "./estates.services";
import { removeUndefined, monthsUtils } from "../utils/utils";
import { increaseAgentAcquisitionNum } from "./user.services";

const date = new Date();

export const createAcquisition = async (acquisition: AcquisitionData) => {
  const { agent_id, owner_id, buyer_id, tenant_id, estate_id } = acquisition;
  const agent = (await getUserID(agent_id)) as User;
  await increaseAgentAcquisitionNum(agent_id);
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
  const months: Array<string> = monthsUtils();
  const date = new Date();

  const newDocDate: CreateDocAcquisitions = {
    amount: acquisition.transaction_price,
    year: date.getFullYear(),
    payment_date: date,
    paid: false,
  };
  months.forEach(async (month) => {
    await db
      .collection("Acquisitions")
      .doc(response.id)
      .collection("Billing")
      .doc(month)
      .set(newDocDate);
  });
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

// esta ruta modifica el precio del mes que seleccione el agente
export const postModifiedPrice = async (
  uid: string,
  newPrice: number,
  month: string
) => {
  const acquisitionsRef = await db
    .collection("Acquisitions")
    .doc(uid)
    .collection("Billing")
    .doc(month);
  let updatedDoc;
  await acquisitionsRef.get().then(async (docSnapshot) => {
    if (docSnapshot.exists) {
      updatedDoc = await acquisitionsRef.update({
        amount: newPrice,
        payment_date: date,
      });
      console.log("Documento actualizado:", updatedDoc);
    } else {
      updatedDoc = undefined;
      console.log("El documento no existe: ", updatedDoc);
    }
  });
  return updatedDoc;
};
// esta ruta paga el mes que seleccione el agente
export const postPaymentRent = async (uid: string, month: string) => {
  const acquisitionsRef = await db
    .collection("Acquisitions")
    .doc(uid)
    .collection("Billing")
    .doc(month);
  let updatedDoc;
  await acquisitionsRef.get().then(async (docSnapshot) => {
    if (docSnapshot.exists) {
      updatedDoc = await acquisitionsRef.update({
        paid: true,
        payment_date: date,
      });
      console.log("Documento actualizado:", updatedDoc);
    } else {
      updatedDoc = undefined;
      console.log("El documento no existe: ", updatedDoc);
    }
  });
  return updatedDoc;
};

export const getAllBilling = async (uid: string) => {
  const snapshot = await db
    .collection("Acquisitions")
    .doc(uid)
    .collection("Billing")
    .get();
  console.log("snapshot: ", snapshot);
  const getAllBilling: CreateDocAcquisitions[] = snapshot.docs.map((doc) => {
    return { ...(doc.data() as CreateDocAcquisitions), id: doc.id };
  });
  console.log("getAllBilling: ", getAllBilling);

  return getAllBilling;
};
