const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: '.env' })

const DB = process.env.MONGO_URL.replace('<password>', process.env.MONGOPASSWORD);

mongoose
  .connect(DB, {
    dbName: 'atafrica',
  })
  .then(() => {
    console.log('DB connection successful');
  })

const app = require('./app')


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Connected to PORT 3030...');
});
  
