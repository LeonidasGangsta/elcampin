import sequelize from "../database/db";
import express from "express";
import routes from "./routes";
import { barnsForBD, logsForBD } from "./testingData";
import { Barn, Log } from "./models";
import { CLIENT_DIRECTORY } from "../config";
import path from "path";

const app = express();
const port = process.env.PORT || 4000;

// Serve the react app
app.use((_req, _res, next) => {
  console.log(CLIENT_DIRECTORY);
  console.log(path.resolve(__dirname, '../client/build'));
  console.log(__dirname);
  next();
})
app.use(express.static(path.resolve(__dirname, '../../../client/build')));

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

// Connect to the database
// Force=true === DROP TABLES
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database was connected succesfully')

    // Inject testing data
    barnsForBD.forEach(async (barn) => {
      try {
        const barnCreated = await Barn.create(barn);
        // @ts-expect-error dataValues is a valid property
        logsForBD(barnCreated.dataValues.id).forEach(async (log) => await Log.create(log));
      } catch (error) {
        console.log(error);
      }
    })

  }).catch((err) => {
    console.error(err);
    console.log('An error ocurred trying to connect to the databse')
  });

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
