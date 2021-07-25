import express from 'express';
import { Barn, Log } from '../models';
const BarnsEndpoints = express.Router();

// Get a list of All Barns
BarnsEndpoints.get('/', async (_req, res) => {
  try {
    const barns = await Barn.findAll();
    res.send(barns);
  } catch (error) {
    res.send(error);
  }
});

// Get a the details of a single barn
BarnsEndpoints.get('/:barnID', async ({ params: { barnID } }, res) => {
  try {
    const barn = await Barn.findByPk(barnID as string, {
      include: {
        model: Log,
        attributes: ['id', 'date', 'eggs', 'chickensInIt', 'createdAt', 'updatedAt'],
      }
    });
    res.send(barn);
  } catch (error) {
    res.send(error);    
  }
});

// Create a new barn on the database
BarnsEndpoints.post('/create', async ({ body }, res) => {
  if (!body?.barn) res.status(400).send('Missing barn to create');

  try {
    const { barn } = body;
    const barnToCreate = await Barn.create({
      barnNumber: barn.barnNumber,
      chickensInIt: barn.chickensInIt,
      maxCapacity: barn.maxCapacity,
    });
    
    res.send({ barn: barnToCreate, message: 'Barn created succesfully' });
  } catch (error) {
    res.status(400).send(error || 'An error just ocurred');
  }
});

// Modify an existing barn on the databse
BarnsEndpoints.patch('/update/:BarnID', async ({ body, params: { BarnID } }, res) => {
  if (!body?.barn) res.status(400).send('Missing barn to modify')

  try {
    const { barn } = body;
    await Barn.update({
      barnNumber: barn.barnNumber,
      maxCapacity: barn.maxCapacity,
      chickensInIt: barn.chickensInIt,
    }, {
      where: {
        id: BarnID,
      }
    });
    const barnUpdated = await Barn.findByPk(BarnID as string);

    res.send(barnUpdated);
  } catch (error) {
    res.status(400).send(error || 'An error just ocurred');
  }
});

// Delete a barn
BarnsEndpoints.delete('/delete/:BarnID', async ({ params: { BarnID } }, res) => {
  try {
    const barnToDelete = await Barn.findByPk(BarnID as string);
    if (!barnToDelete) throw (`No barn with ID: ${BarnID} was found to delete`);
    await barnToDelete.destroy();
    res.send({ message: `Barn successfully deleted.`, barnDeleted: barnToDelete })
  } catch (error) {
    res.send(error);
  }
});

export default BarnsEndpoints;
