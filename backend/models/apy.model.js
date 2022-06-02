const mongoose = require('mongoose');

const apySchema = new mongoose.Schema({
    
    stableApy: { type: Number, required: true},
    big4Apy: { type: Number, required: true},
    bscApy: { type: Number, required: true},

})

module.exports = Apy = mongoose.model("apy", apySchema);