const mongoose = require("mongoose");
const validator = require("validator");

const coinSchema = new mongoose.Schema({
  coin : {
    type: String,
    required: true,
  },
  quantity : {
    type: Number,
    required: true,
  },
},{
  timestamps: true
});

const vaultSchema = new mongoose.Schema({
  vault : {
    type: Number,
    required: true,
    trim: true,
    minlength: 1
  },
  stable : {
    type: String,
    required: true,
    trim: true
  },
  timelock : {
    type : String,
    required: true
  },
  autoRenew : {
    type : Boolean,
    required: true
  },
  activated : {
    type : Boolean,
    required: true
  },
  endDate : {
    type : String,
    required: true
  },
  solicitud : {
    type : Number,
    required: true
  },
  funds : {
    type : Number,
    required: true,
    min: 0
  },
  coins : [coinSchema]
},{
  timestamps: true
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate : (value)=>{
      return validator.isEmail(value)
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  displayName: {
    type: String
  },
  saldo: {
    type: Number
  },
  vaults : [vaultSchema]
},{
  timestamps: true
});

module.exports = User = mongoose.model("user", userSchema);