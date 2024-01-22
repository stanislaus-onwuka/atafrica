const Risk = require('../models/riskModel')


exports.getAllRisks = async (req, res) => {
    const risks = await Risk.find()

    try{
        res.status(200).json({
          status: 'success',
          results: risks.length,
          data: {
            risks,
          },
        });
    } catch (error) {
      res.status(404).json({
        status: 'failed',
        message: error,
      });
    }
}

exports.getRisk = async (req, res) => {
  const { risk_score } = req.params

  console.log(req.params)

  try {
    const risk = await Risk.findOne({risk_score})
    
      res.status(200).json({
        status: 'success',
        data: {
          risk,
        },
      });
    } catch (error) {
      res.status(404).json({
        status: 'failed',
        message: error,
      });
    }
}