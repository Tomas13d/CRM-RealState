import express from "express";
const router = express.Router();
import usersRouter from "./user.routes";
import clientRouter from "./client.routes";
import acquisitionRouter from "./acquisition.routes";
import rentRouter from "./rent.routes";
import estateRouter from "./estate.routes";
import rentpayRouter from "./rentpay.routes";

router.use("/users", usersRouter);
router.use("/clients", clientRouter);
router.use("/acquisitions", acquisitionRouter);
router.use("/rents", rentRouter);
router.use("/rentpay", rentpayRouter);

router.use("/estates", estateRouter);

export default router;
