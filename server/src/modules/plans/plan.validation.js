import Joi from "joi";

export const addSchema = {
    body: Joi.object({
        title: Joi.string().min(3).max(50).required(),
        description: Joi.string().min(3).max(50).required(),
        fee: Joi.number().required(),
        profile_picture: Joi.string().allow("", null),
    }),
  };

  export const updateSchema = {
    body: Joi.object({
        title: Joi.string().min(3).max(50),
        description: Joi.string().min(3).max(50),
        fee: Joi.number(),
        profile_picture: Joi.string().allow("", null),
    }),
  };