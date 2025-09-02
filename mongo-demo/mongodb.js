const mongooses = require('mongoose');
const customschema = require("../modul/config")
const db = 'mongodb://localhost:/ethio';
mongooses.connect(db)
try {
    console.log('mongodb is conneected!')

}
catch (err) {
    console.log('error', err.message);

}


