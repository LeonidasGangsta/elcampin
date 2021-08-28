import sequelize from "../database/db";
import express from "express";
import routes from "./routes";
import path from "path";
import { barnsForBD, logsForBD } from "./testingData";
import { Barn, Log } from "./models";

const app = express();
const port = process.env.PORT || 4000;

// Serve the react app
app.use(express.static(path.join(__dirname, '../../app/client/build')));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
})

// Routes
const { barns, logs } = routes;
app.use(barns.route, barns.endpoints);
app.use(logs.route, logs.endpoints);

app.listen(port, () => {
  console.log(`server running at port: ${port}`);

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
