const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

mongoose
  .connect(DB, {
    dbName: 'atafrica',
  })
  .then(() => {
    console.log('DB connection successful');
  })

const app = require('./app')


const port = 3030

app.listen(port, () => {
  console.log('Connected to PORT 3030...');
});
  