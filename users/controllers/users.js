const User = require('../models/user');
const request = require('request');

module.exports.createUser = (req, res) => {
  const { email, password } = req.body;

  User.create({ email, password })
  .then(data => {
    request(
      {
        method: 'POST',
        url: 'http://localhost:3001/history',
        json: {
          data: data
        }
      },
      (err, response, data) => {
        if(err) {
          return res.status(500).send({ 'message': 'Непредвиденная ошибка.' })
        }

        return res.status(201).send({ data });
      }
    );
  })
  .catch(err => {
    if(err.errors.find(item => item.validatorKey === 'not_unique')) {
      res.status(403).send({ 'message': 'Такой email уже используется.' });
      return;
    }

    res.status(500).send({ 'message': 'Непредвиденная ошибка.' });
  })
}

module.exports.getUsers = (req, res) => {
  User.findAll()
  .then(data => res.send({ data }))
  .catch(() => res.status(500).send({ 'message': 'Непредвиденная ошибка.' }))
}

module.exports.updateUser = (req, res) => {
  const { email, password } = req.body;
  const { id } = req.params;

  User.update({ email, password }, {
    where: { id },
  })
  .then(() => {
    User.findByPk(id)
    .then(data => {
      if(!data) {
        res.status(404).send({ 'message': 'Пользователь не найден.' });
        return;
      }

      request(
        {
          method: 'POST',
          url: 'http://localhost:3001/history',
          json: {
            data: data
          }
        },
        (err, response, data) => {
          if(err) {
            return res.status(500).send({ 'message': 'Непредвиденная ошибка.' })
          }

          return res.send({ data });
        }
      );
    })
    .catch(() => res.status(500).send({ 'message': 'Непредвиденная ошибка.' }));
  })
  .catch(err => {
    if(err.errors.find(item => item.validatorKey === 'not_unique')) {
      res.status(403).send({ 'message': 'Такой email уже используется.' });
      return;
    }

    res.status(500).send({ 'message': 'Непредвиденная ошибка.' });
  })
}
