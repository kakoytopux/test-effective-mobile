const router = require('express').Router();
const { addHistoryUser, getHistoryUser } = require('../controllers/history');
const { Joi, celebrate } = require('celebrate');

router.post('/', celebrate({
  body: Joi.object().keys({
    data: Joi.required()
  })
}), addHistoryUser);
router.get('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.number().integer().required()
  })
}), getHistoryUser);

module.exports = router;
