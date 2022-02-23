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
  res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE");
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
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database was connected successfully')

    // Inject testing data
    // setTestingData();

  }).catch((err) => {
    console.error(err);
    console.log('An error ocurred trying to connect to the database')
  });

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});
