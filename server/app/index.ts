import sequelize from "../database/db";
import express from "express";
import routes from "./routes";

const app = express();
const port = 4000;

app.use(routes);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);

  //Connect to the database
  sequelize.authenticate()
    .then(() => {
      console.log('Database was connected succesfully')
    }).catch((err) => {
      console.error(err);
      console.log('An error ocurred trying to connect to the databse')
    });
});