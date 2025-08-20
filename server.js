const express = require("express");
const app = express();

const routes = require("./src/routes");
const sequelize = require("./src/database/database.js");

app.use(express.json());
app.use(routes);


sequelize.sync().then(() => {
    console.log(`Database is running: ${process.env.DB_NAME}`);
}).catch((error) => {
    console.log(`Error database: ${error}`)
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running`);
});
