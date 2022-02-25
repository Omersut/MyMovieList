import Joi from "joi";

const productSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().min(3),
  price: Joi.string().required(),
  photos: Joi.string(),
});

export default productSchema;
