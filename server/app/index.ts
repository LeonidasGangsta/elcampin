import sequelize from "../database/db";
import express from "express";
import routes from "./routes";

const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);

  // Connect to the database
  // Force=true === DROP TABLES
  sequelize.sync({ force: false })
    .then(() => {
      console.log('Database was connected succesfully')
    }).catch((err) => {
      console.error(err);
      console.log('An error ocurred trying to connect to the databse')
    });
});
