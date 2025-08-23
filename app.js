const express = require('express');
const app = express();
const router = express.Router();
//const placeRouter = require('./routes/place_router')
// const customeRoute = require('./routes/custome')
// const genderRouter = require('./routes/genres')
//const mogo = require('./mongo-demo/mongodb')
// const mongoose = require('moongoose');
// const User = require('./mongo-demo/user')
// const db = 'mongodb://localhost:27017/home';
// mongoose.connect(db)

//     .then(() => {
//         console.log('mongodb is connected!');

//     })
//     .catch((err) => {
//         console.log('mongodb is error ', err.message);

//     })
// const users = [
//     { id: 1, name: 'dere' },
//     { id: 2, name: 'dere' },
//     { id: 3, name: 'dere' }
// ]
// app.use(placeRouter);

// app.use(placeRouter)
// app.use(placeRouter)
// app.use(customeRoute)
// app.use('gender/', genderRouter)
app.get('user/api', (req, res) => {
    res.json('hello students')
});
app.post('user/api', (req, res) => {
    res.json('hello everyone!')
});
app.put('user/api', (req, res) => {
    res.json('what s up!')
});

app.listen(3000, () => {
    console.log('server port is http://localhost:3000');

})