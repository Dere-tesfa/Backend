const express = require('express');
const router = express.Router();
const user = [
    { id: 1, name: 'dereje' },
    { id: 2, name: 'alex' },
    { id: 3, name: 'bro' },
]


router.get('/:id', (req, res) => {
    let users = user.find(c => c.id === parseInt(req.params.id))
    if (!users) res.status(200).json('not found')
    res.json(user);
})
router.post('/', (req, res) => {
    let users = user.find(c => c.id === parseInt(req.params.id))
    if (!users) res.status(200).json('not found')
    res.json(user);
})
router.put('/', (req, res) => {
    let users = user.find(c => c.id === parseInt(req.params.id))
    if (!users) res.status(200).json('not found')
    res.json(user);
})
router.delete('/', (req, res) => {
    let users = user.find(c => c.id === parseInt(req.params.id))
    if (!users) res.status(200).json('not found')
    res.json(user);
})
module.exports = router;