const router = require('express').Router();
const { createUser, getUsers, updateUser } = require('../controllers/users');
const { Joi, celebrate } = require('celebrate');

router.post('/', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
  })
}), createUser);
router.get('/', getUsers);
router.patch('/:id', celebrate({
  params: Joi.object().keys({
    id: Joi.number().integer().required()
  }),
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6)
  })
}), updateUser);

module.exports = router;
