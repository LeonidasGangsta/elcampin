import sequelize from "../database/db";
import express from "express";
import routes from "./routes";
import { barnsForBD, logsForBD } from "./testingData";
import { Barn, Log } from "./models";

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const { barns, logs } = routes;
app.use(barns.route, barns.endpoints);
app.use(logs.route, logs.endpoints);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);

  // Connect to the database
  // Force=true === DROP TABLES
  sequelize.sync({ force: true })
    .then(() => {
      console.log('Database was connected succesfully')

      // Inject testing data
      barnsForBD.forEach(async (barn) => {
        await Barn.create(barn).catch(console.log);
        logsForBD.forEach(async (log) => await Log.create(log).catch(console.log));
      })
      
    }).catch((err) => {
      console.error(err);
      console.log('An error ocurred trying to connect to the databse')
    });
});
