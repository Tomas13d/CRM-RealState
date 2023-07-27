import "firebase/compat/auth";
import { db } from "../firebase";
import { User } from "./types.md";

export const getAllAgents = async () => {
  const agentsRef = db.collection("Users");
  const agentSnapshot = await agentsRef.where("type", "==", "agent").get();
  const agents: User[] = agentSnapshot.docs.map((doc) => {
    return { ...(doc.data() as User), id: doc.id };
  });
  console.log(agents);
  return agents;
};
