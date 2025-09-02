

const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./mongo-demo/mongodb')
const custome = require("./routes/custome")
const get = require("./routes/get")
app.use(express.json());
app.use("api/custome", custome)
app.use("api/get", get)

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