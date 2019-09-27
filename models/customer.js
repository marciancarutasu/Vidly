const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 5,
    maxlenght: 50,
  },
  phone: {
    type: String,
    required: true,
    minlenght: 5,
    maxlenght: 50,
  },
  isGold: {
    type: Boolean,
    default: false
  },
}));

function validateCustomer(customer) {
  const schema = {
    id: Joi.objectId().required(),
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
