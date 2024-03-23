import Joi from "joi";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

const timePattern = "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"; // Regular expression for validating time in HH:mm format

export const addingCoachSchema = {
  body: Joi.object({
    full_name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp(passwordPattern)).required(),
    Cpassword: Joi.string().valid(Joi.ref("password")).required(),
    phone_number: Joi.string()
      .pattern(/^(01)[0-9]{9}$/)
      .required(),
    birth_date: Joi.date().less("now").required(),
    role: Joi.string().default("coach"),
    salary: Joi.number().positive().required(),
    profile_picture: Joi.string(),
    working_days: Joi.string(),
  }),
};

export const UpdatingCoachSchema = {
  body: Joi.object({
    full_name: Joi.string().min(3).max(50),
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp(passwordPattern)),
    Cpassword: Joi.string().valid(Joi.ref("password")),
    phone_number: Joi.string().required(),
    birth_date: Joi.date().less("now"),
    role: Joi.string(),
    salary: Joi.number().positive(),
    client_ids: Joi.string().hex().min(24).max(24),
    working_days: Joi.string(),
  }),
};
