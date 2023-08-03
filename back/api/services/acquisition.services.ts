import "firebase/compat/auth";
import { db } from "../firebase";
import { Acquisition, AcquisitionData, Client, Estate, User } from "./types.md";
import { getUserID } from "./user.services";
import { getClientID } from "./client.services";
import { getEstateID } from "./estates.services";
import { removeUndefined } from "../utils/utils";
import { increaseAgentAcquisitionNum } from "./user.services";

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
  const acquisitionsRef = db.collection("Acquisitions");
  const snapshot = await acquisitionsRef.get();
  const acquisitions: Acquisition[] = snapshot.docs
    .map((doc) => doc.data() as Acquisition)
    .filter((acquisition) => acquisition.transaction_type == "rent");

  return acquisitions;
};
