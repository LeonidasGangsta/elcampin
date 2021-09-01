import sequelize from "../database/db";
import express from "express";
import routes from "./routes";
import { CLIENT_DIRECTORY } from "../config";

const app = express();
const port = process.env.PORT || 4000;

// Serve the react app
app.use(express.static(CLIENT_DIRECTORY));

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
// In case of no route match
app.use((req, res) => {
  if (req.accepts('html')) {
    res.redirect('/');
    return;
  };

  res.status(404).send('Error 404: Page not found');
})

// Connect to the database
// Force=true === DROP TABLES
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database was connected succesfully')

    // Inject testing data
    /* barnsForBD.forEach(async (barn) => {
      try {
        const barnCreated = await Barn.create(barn);
        // @ts-expect-error dataValues is a valid property
        logsForBD(barnCreated.dataValues.id).forEach(async (log) => await Log.create(log));
      } catch (error) {
        console.log(error);
      }
    }) */

  }).catch((err) => {
    console.error(err);
    console.log('An error ocurred trying to connect to the databse')
  });

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
