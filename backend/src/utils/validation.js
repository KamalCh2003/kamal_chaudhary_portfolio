import Joi from 'joi';

export const projectSchema = Joi.object({
  number: Joi.string().required(),
  title: Joi.string().required(),
  category: Joi.string().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  images: Joi.array().items(Joi.string().uri()).required(),
});

export const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(10).required(),
});