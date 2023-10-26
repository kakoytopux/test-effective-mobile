import { Router } from 'express';
import { addHistoryUser, getHistoryUser } from '../controllers/history';
import { Joi, celebrate } from 'celebrate';

const router: Router = Router();

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

export default router;
