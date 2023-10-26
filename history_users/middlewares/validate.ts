import { Joi, celebrate } from 'celebrate';

export const addHistoryUserValidate = celebrate({
  body: Joi.object().keys({
    data: Joi.required()
  })
});

export const getHistoryUserValidate = celebrate({
  params: Joi.object().keys({
    id: Joi.number().integer().required()
  })
});
