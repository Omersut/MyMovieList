import product from "../../models/product";
import Boom from "boom";
import productSchema from "./validations";

const Create = async (req, res, next) => {
  const input = req.body;
  const { error } = productSchema.validate(input);

  if (error) {
    return next(Boom.badRequest(error.details[0].message));
  }

  try {
    input.photos = JSON.parse(input.photos);

    const product = new product(input);
    const savedData = await product.save();

    res.json(savedData);
  } catch (e) {
    next(e);
  }
};

const Get = async (req, res, next) => {
  const { product_id } = req.params;

  if (!product_id) {
    return next(Boom.badRequest("Missing paramter (:product_id)"));
  }

  try {
    const product = await product.findById(product_id);

    res.json(product);
  } catch (e) {
    next(e);
  }
};

const Update = async (req, res, next) => {
  const { product_id } = req.params;

  try {
    const updated = await product.findByIdAndUpdate(product_id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (e) {
    next(e);
  }
};

const Delete = async (req, res, next) => {
  const { product_id } = req.params;

  try {
    const deleted = await product.findByIdAndDelete(product_id);

    if (!deleted) {
      throw Boom.badRequest("product not found.");
    }

    res.json(deleted);
  } catch (e) {
    next(e);
  }
};

const limit = 24;
const GetList = async (req, res, next) => {
  let { page } = req.query;

  if (page < 1) {
    page = 1;
  }

  const skip = (parseInt(page) - 1) * limit;

  try {
    const products = await product
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json(products);
  } catch (e) {
    next(e);
  }
};

export default {
  Create,
  Get,
  Update,
  Delete,
  GetList,
};
