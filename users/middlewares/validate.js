const { Joi, celebrate } = require('celebrate');

module.exports.createUserValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
  })
});

module.exports.updateUserValidate = celebrate({
  params: Joi.object().keys({
    id: Joi.number().integer().required()
  }),
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
  })
});
