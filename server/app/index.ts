import express from "express";
import cors from "cors";
import sequelize from "../database/db";
import routes from "./routes";
import { CLIENT_DIRECTORY } from "../config";
// import { setTestingData } from "./testingData";

const app = express();
const port = process.env.PORT || 4000;

// Serve the react app
app.use(express.static(CLIENT_DIRECTORY));

// cors middleware
const corsOptions: cors.CorsOptions = {
  origin: "https://elcampin.herokuapp.com",
  methods: "GET,POST,PATCH,DELETE",
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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
