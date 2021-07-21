import express from 'express';
import Barn from '../models';
const Router = express.Router();

Router.get('/', async (_req, res) => {
  const barns = await Barn.findAll();
  res.send(barns);

  /* const barn1 = await Barn.create({
    barnNumber: 1,
    chickensInIt: 100,
    maxCapacity: 200,
  });
  res.send(barn1); */
})

export default Router;