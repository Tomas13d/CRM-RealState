import { User } from "./api/services/user.services";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
