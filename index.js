require('dotenv').config();

const express = require('express');
const db = require('./src/models')

const app = express();
const port = process.env.APP_PORT

require('./src/routes/v1')(app)

const checkConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

app.listen(port, () => {
  checkConnection()
  console.log(`app listening on port ${port}`)
})

