const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/;


export const creatSchema = {
    body: Joi.object({
        client_id: Joi.string().hex().min(24).max(24).required(),
        coach_id: Joi.string().hex().min(24).max(24).required(),
        date:Joi.date().required(),
        start_time: Joi.string().pattern(new RegExp(timeRegex)),
        end_time: Joi.string().pattern(new RegExp(timeRegex)),
        status: Joi.string().min(3).max(10).required(),
    }),
  };

  export  const confirmSchema = {
    body: Joi.object({
        client_id: Joi.string().hex().min(24).max(24).required(),
        coach_id: Joi.string().hex().min(24).max(24).required(),
    }),
  };