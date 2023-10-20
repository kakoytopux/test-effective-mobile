const express = require('express');
const { errors } = require('celebrate'); 
require('dotenv').config();

const { PORT = 3001 } = process.env;
const app = express();

app.use(express.json());

app.use('/history', require('./routes/history'));

app.use('*', (req: any, res: any) => {
  res.status(404).send({ 'message': 'Маршрут не найден.' });
});

app.use(errors());

app.listen(PORT);
