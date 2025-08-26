const mongooses = require('mongoose');
const db = 'mongodb://localhost:/127.1.1.0/register';
mongooses.connect(db)
try {
    console.log('mongodb is conneected!')

}
catch (err) {
    console.log('error', err.message);

}
const custome = new mongooses.Schema({
    name: String
})
const listItem = mongooses.model('listItem', custome);
const createItem = new listItem({
    name: 'dereje tesfaye'
})
const saveItem = createItem.save()
console.log(saveItem);
