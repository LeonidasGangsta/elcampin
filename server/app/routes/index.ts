import express from 'express';
import Barn from '../models';
const Router = express.Router();

Router.get('/', async (_req, res) => {
  const barn1 = await Barn.create({
    barNumber: 1,
    chickensInIt: 100,
    maxCapacity: 200,
  });
  res.send(barn1);
})

export default Router;