import Joi from "joi";

export const Login = Joi.object({
  user_name: Joi.string().required().max(32),
  user_password: Joi.string().required().max(16)
}).required();

export const Register = Joi.object({
  user_name: Joi.string().required().max(32),
  user_password: Joi.string().required().max(16),
  user_firstName: Joi.string().required().max(32),
  user_lastName: Joi.string().required().max(32)
}).required();

export const ProductCreated = Joi.object({
  product_name: Joi.string().required(),
  product_catagories: Joi.string().required(),
  product_available: Joi.number().required(),
  product_price: Joi.number().required(),
  product_image: Joi.string().required()
})