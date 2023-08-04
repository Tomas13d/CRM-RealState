import "firebase/compat/auth";
import { auth, db } from "../firebase";
import { User } from "./types.md";

export const login = async (user: User) => {
  const { email, idToken } = user;
  const userCredential = await auth.getUserByEmail(email);
  const userId = userCredential.uid;

  const data = await getUserID(userId);

  return { idToken, data, userId };
};

export const register = async (user: User) => {
  const { email, password, firstname, lastname, type } = user;
  const regiterUser = await auth.createUser({
    email,
    password,
  });
  const userRef = db.collection("Users");
  const newUserDoc = userRef.doc(regiterUser.uid);
  const newUser = await newUserDoc.set({
    firstname,
    lastname,
    email,
    type,
  });

  return newUser;
};

export const getUserID = async (id: string) => {
  const userRef = db.collection("Users").doc(id);
  const userSnapshot = await userRef.get();
  let userData;
  userSnapshot.exists
    ? (userData = userSnapshot.data())
    : console.error("El usuario con el id proporcionado no existe.");
  return userData;
};

export const getAllUsers = async () => {
  const usersSnapshot = await db.collection("Users").get();
  const users: User[] = usersSnapshot.docs.map((doc) => {
    return { ...(doc.data() as User), id: doc.id };
  });
  return users;
};

export const increaseAgentAcquisitionNum = async (agent_id: string) => {
  const agentReference = db.collection("Users").doc(agent_id);
  const agent = await agentReference.get();
  const { acquisition_number } = agent.data() as User;

  const response = await agentReference.update({
    acquisition_number: acquisition_number + 1,
  });
  return response;
};
