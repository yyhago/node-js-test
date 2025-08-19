const express = require("express");
const app = express();

const routes = require("./routes");
const sequelize = require("./database/database.js");

app.use(express.json());
app.use(routes);


sequelize.sync().then(() => {
    console.log(`Database is running: ${process.env.DB_NAME}`);
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});
