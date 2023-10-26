import express, { Express, Request, Response } from 'express';
import { errors } from 'celebrate';
import historyRouter from './routes/history';

const { PORT = 3001 } = process.env;
const app: Express = express();

app.use(express.json());

app.use('/history', historyRouter);

app.use('*', (req: Request, res: Response): void => {
  res.status(404).send({ 'message': 'Маршрут не найден.' });
});

app.use(errors());

app.listen(PORT);
