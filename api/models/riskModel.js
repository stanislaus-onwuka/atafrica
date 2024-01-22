const mongoose = require("mongoose");

const riskSchema = new mongoose.Schema({
  risk_score: {
    type: Number,
  },

  nigerian_stocks: {
    type: Number,
  },
  foreign_stocks: {
    type: Number,
  },
  tech_stocks: {
    type: Number,
  },
  emerging_stocks: {
    type: Number,
  },
  nigerian_bonds: {
    type: Number,
  },
  foreign_bonds: {
    type: Number,
  },
  commodities: {
    type: Number,
  },
  real_estate: {
    type: Number,
  },
  t_bills: {
    type: Number,
  },
  alternative: {
    type: Number,
  },
});

const Risk = mongoose.model('Risk', riskSchema);

module.exports = Risk;
