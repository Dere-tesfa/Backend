const mongoose = require('mongoose');
const custome = mongoose.Schema({
    name: String,
})
const customes = mongoose.model('customes', custome);
const create = new customes({
    name: 'dereje t'
})
const saveCustom = create.save();

console.log(saveCustom);