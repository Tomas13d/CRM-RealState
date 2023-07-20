import "firebase/compat/auth";
import { auth, db } from "../firebase";
import { User } from "./types.md";

export const login = async (user: User) => {
  const { email } = user;
  const userCredential = await auth.getUserByEmail(email);
  const userId = userCredential.uid;

  const expiresIn = 7 * 24 * 60 * 60 * 1000;
  const sessionCookie = await auth.createSessionCookie(userId, { expiresIn });

  console.log(sessionCookie);
  const data = await getUserByUID(userId);

  return { sessionCookie, data };
};

export const createToken = async (user: User) => {
  const token = await auth.createCustomToken(user.id);

  return token;
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

export const getUserByUID = async (uid: string) => {
  const userDocument = db.collection("Users").doc(`${uid}`);
  const loginUser = await userDocument.get();

  const userData: User = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    id: "",
  };

  if (loginUser.exists) {
    const data = loginUser.data();
    if (data) {
      userData.firstname = data.firstname;
      userData.lastname = data.lastname;
      userData.email = data.email;
      userData.password = data["password "];
      userData.id = uid;
    }
  }

  return userData;
};
