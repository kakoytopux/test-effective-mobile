const express = require('express');
const { errors } = require('celebrate');
require('dotenv').config();

const { PORT = 3002 } = process.env;
const app = express();

app.use(express.json());

app.use('/users', require('./routes/users'));

app.use('*', (req, res) => {
  res.status(404).send({ 'message': 'Маршрут не найден.' });
});

app.use(errors());

app.listen(PORT);
