import Joi from "joi";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$@#%&*])[A-Za-z\d!$@#%&*]{8,20}$/;


export const signUpSchema = {
  body: Joi.object({
    full_name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp(passwordPattern)).required(), //justForTesting xD
    // password: Joi.string().required(),
    Cpassword: Joi.string().valid(Joi.ref("password")).required(),
    phone_number: Joi.string()
      .pattern(/^(01)[0-9]{9}$/)
      .required(),
    birth_date: Joi.date().less("now").required(),
    profile_picture: Joi.string().allow("", null),
    height: Joi.number().positive().required(),
    weight: Joi.number().positive().required(),
  }),
};

export const signInSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp(passwordPattern)).required(),
  }),
};

export const changePasswordSchema = {
  body: Joi.object({
    oldPassword: Joi.string().pattern(new RegExp(passwordPattern)).required(),
    newPassword: Joi.string().pattern(new RegExp(passwordPattern)).required(),
    CNewPassword: Joi.string().valid(Joi.ref("newPassword")).required(),
  }),
};

export const forgetPasswordSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
  }),
};

export const resetPasswordSchema = {
  body: Joi.object({
    newPassword: Joi.string().pattern(new RegExp(passwordPattern)).required(),
    CNewPassword: Joi.string().valid(Joi.ref("newPassword")).required(),
  }),
};

export const updateUserSchema = {
  body: Joi.object({
    full_name: Joi.string().min(3).max(50),
    email: Joi.string().email(),
    height: Joi.number().positive(),
    weight: Joi.number().positive(),
    birth_date: Joi.date().less("now"),
  }),
};
