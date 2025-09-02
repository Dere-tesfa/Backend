const mongoose = require("mongoose")
const custome = new mongoose.Schema({
    name: String
})
const listItem = mongoose.model('listItem', custome);
const createItem = new listItem({
    name: 'dereje tesfaye'
})
const saveItem = createItem.save()
console.log(saveItem);
module.exports = listItem;