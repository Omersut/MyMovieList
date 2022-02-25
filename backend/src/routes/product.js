import express from "express";
const router = express.Router();

import product from "../controllers/product";
// import cache from '../cache';

import grantAccess from "../middlewares/grantAccess";
import { verifyAccessToken } from "../helpers/jwt";

router.post(
  "/",
  verifyAccessToken,
  grantAccess("createAny", "product"),
  product.Create
);
router.get(
  "/:product_id",
  // verifyAccessToken,
  // grantAccess('readAny', 'product'),
  // cache.route(),
  product.Get
);
// router.get('/', cache.route(), product.GetList);
router.get("/", product.GetList);
router.put("/:product_id", product.Update);
router.delete("/:product_id", product.Delete);

export default router;
