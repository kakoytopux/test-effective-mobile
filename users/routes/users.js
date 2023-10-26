const router = require('express').Router();
const { createUser, getUsers, updateUser } = require('../controllers/users');
const { createUserValidate, updateUserValidate } = require('../middlewares/validate');

router.post('/', createUserValidate, createUser);
router.get('/', getUsers);
router.patch('/:id', updateUserValidate, updateUser);

module.exports = router;
