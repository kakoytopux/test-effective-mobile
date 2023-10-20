const History = require('../models/history');

module.exports.addHistoryUser = (req: any, res: any) => {
  const { data } = req.body;
  
  History.create({ history: data })
  .then((data: any) => res.send(data))
  .catch((err: any) => {
    if(err.errors.find((item: any) => item.validatorKey === 'is_null')) {
      res.status(400).send({ 'message': 'Необходимо заполнить все поля.' });
      return;
    }

    res.status(500).send({ 'message': 'Непредвиденная ошибка.' });
  })
}

module.exports.getHistoryUser = (req: any, res: any) => {
  const { id } = req.params;

  History.findAll({
    where: {
      history: {
        id: id
      }
    }
  })
  .then((data: any) => res.send(data))
  .catch(() => res.status(500).send({ 'message': 'Непредвиденная ошибка.' }))
}
