import Joi from "joi";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$@#%&*])[A-Za-z\d!$@#%&*]{8,20}$/;

const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;

export const addingCoachSchema = {
    body: Joi.object({
      full_name: Joi.string().min(3).max(50).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp(passwordPattern)).required(),
      Cpassword: Joi.string().valid(Joi.ref("password")).required(),
      phone_number: Joi.string().required(),
      birth_date: Joi.date().less("now").required(),
      age: Joi.number().min(15).max(60).required(),
      role:Joi.string(),
      salary:Joi.number().positive().required(),
      client_ids:Joi.string().hex().min(24).max(24).required(),
      working_days:Joi.array(),
      //start_time: Joi.string().pattern(new RegExp(timeRegex)),
      //end_time: Joi.string().pattern(new RegExp(timeRegex))
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
      age: Joi.number().min(15).max(60),
      role:Joi.string(),
      salary:Joi.number().positive(),
      client_ids:Joi.string().hex().min(24).max(24),
      working_days:Joi.array(),
      //start_time: Joi.string.pattern(new RegExp(timeRegex)),
      //end_time: Joi.string.pattern(new RegExp(timeRegex))
    }),
  };