const express = require('express')

const { getAllRisks, getRisk } = require('../controllers/riskController')


const router = express.Router()

router.route('/').get(getAllRisks)
router.route('/:risk_score').get(getRisk)


module.exports = router