import Joi from "joi";

export const addingtransSchema = {
    body: Joi.object({
        plan_id: Joi.string().hex().min(24).max(24).required(),
        client_id: Joi.string().hex().min(24).max(24).required(),
        order_id: Joi.number().positive().required(),
        payment_status: Joi.string().min(3).max(50),
        subscriptionMonths:Joi.number().positive(),
        amount: Joi.number().positive().required(),
        transactionDateAndTime: Joi.date()
    }),
  };

  export const updatingtransSchema = {
    body: Joi.object({
        plan_id: Joi.string().hex().min(24).max(24),
        client_id: Joi.string().hex().min(24).max(24),
        order_id: Joi.number().positive(),
        payment_status: Joi.string().min(3).max(50),
        subscriptionMonths:Joi.number().positive(),
        amount: Joi.number().positive(),
        transactionDateAndTime: Joi.date()
    }),
  };