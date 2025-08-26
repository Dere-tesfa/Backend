

const express = require('express');
const app = express();
const cors = require('cors');
const mongooses = require('mongoose');
const db = 'mongodb://localhost:27017/ethio';
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

app.post('/users', async (req, res) => {
    try {
        console.log(res.body);
        const createItem = new listItem({
            name: req.body.name

        })
        await createItem.save()
        res.send("<h2>✅ Data saved to MongoDB!</h2><a href='/'>Go back</a>");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

})


app.listen(3031, () => {
    console.log("server port is running http://localhost:3031");

})








// app.get('/submit', (req, res) => {
//     res.send('form')
// })
// app.post('/submit', async (req, res) => {
//     try {
//         const createUser = new usermodul({
//             name: req.body.name,
//             password: req.body.password,
//             email: req.body.email,
//         })
//         await createUser.save()

//         res.send('User created successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }

// })
// app.listen(3000, () => {
//     console.log('server port is http://localhost:3000');

// })