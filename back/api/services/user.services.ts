import "firebase/compat/auth";
import { auth, db } from "../firebase";

interface User {
  firstname: string;
  lastname: string;
  type?: string;
  password: string;
  email: string;
  id: string;
}

export const login = async (user: User) => {
  const { email } = user;
  const userCredential = await auth.getUserByEmail(email);

  const userId = userCredential.uid;
  const userDocument = db.collection("Users").doc(`${userId}`);
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
      userData.id = userId;
    }
  }

  return userData;
};

export const createToken = async (user: User) => {
  const token = await auth.createCustomToken(user.id, user);
  console.log(token);

  return token;
};

export const register = async (email: string, password: string) => {};
