const express = require('express')
const cors = require("cors");

const RiskRouter = require('./routes/riskRoutes')

const app = express();

// Add middleware
app.use(express.json())

app.use(cors());


// Add routers
app.use('/api/v1/risks', RiskRouter)

module.exports = app
