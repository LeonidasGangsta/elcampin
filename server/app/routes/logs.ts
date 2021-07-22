import express from 'express';
import { Logs } from '../models';
const LogsEndpoints = express.Router();

// Get a list of All Logs
LogsEndpoints.get('/', async (_req, res) => {
  try {
    const barns = await Logs.findAll();
    res.send(barns);
  } catch (error) {
    res.send(error);
  }
});

// Get a the details of a single log
LogsEndpoints.get('/:logID', async ({ params: { logID } }, res) => {
  try {
    const log = await Logs.findByPk(logID as string);
    res.send(log);
  } catch (error) {
    res.send(error);    
  }
});

// Create a new log on the database
LogsEndpoints.post('/create', async ({ body }, res) => {
  if (!body?.log) res.status(400).send('Missing log to create');

  try {
    const { log } = body;
    const logToCreate = await Logs.create({
      date: log.date,
      eggs: log.eggs,
      chickensInIt: log.chickensInIt,
    });
    
    res.send({ log: logToCreate, message: 'Log created succesfully' });
  } catch (error) {
    res.status(400).send(error || 'An error just ocurred');
  }
});

// Modify an existing log on the databse
LogsEndpoints.patch('/update/:LogID', async ({ body, params: { LogID } }, res) => {
  if (!body?.log) res.status(400).send('Missing log to modify')

  try {
    const { log } = body;
    await Logs.update({
      date: log.date,
      eggs: log.eggs,
      chickensInIt: log.chickensInIt,
    }, {
      where: {
        id: LogID,
      }
    });
    const logUpdated = await Logs.findByPk(LogID as string);

    res.send(logUpdated);
  } catch (error) {
    res.status(400).send(error || 'An error just ocurred');
  }
});

// Delete a log
LogsEndpoints.delete('/delete/:LogID', async ({ params: { LogID } }, res) => {
  try {
    const logToDelete = await Logs.findByPk(LogID as string);
    if (!logToDelete) throw (`No log with ID: ${LogID} was found to delete`);
    await logToDelete.destroy();
    res.send({ message: `Log successfully deleted.`, logDeleted: logToDelete })
  } catch (error) {
    res.send(error);
  }
});

export default LogsEndpoints;
