import { Request, Response } from 'express';
import History from '../models/history';

export const addHistoryUser = (req: Request, res: Response) => {
  const { data } = req.body;
  
  History.create({ history: data })
  .then((data: {[key: string]: any}) => res.send(data))
  .catch(() => res.status(500).send({ 'message': 'Непредвиденная ошибка.' }))
}

export const getHistoryUser = (req: Request, res: Response) => {
  const { id } = req.params;

  History.findAll({
    where: {
      history: {
        id: id
      }
    }
  })
  .then((data: {[key: string]: any}) => res.send(data))
  .catch(() => res.status(500).send({ 'message': 'Непредвиденная ошибка.' }))
}
