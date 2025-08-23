const express = require('express');
const routes = express.Router()
const users = {
    name: 'dereje',
    password: '12345',
    email: 'dereje@gmail.com'
}

routes.get('/', (req, res) => {
    res.json(users);
})
module.exports = routes;
