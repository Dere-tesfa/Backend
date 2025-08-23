const express = require('express');

const router = express.Router();
const users = [
    { id: 1, name: 'dere' },
    { id: 2, name: 'dere' },
    { id: 3, name: 'dere' }
]

// router.get('/', (req, res) => {
//     console.log('router api');
//     res.json({ message: 'it works!' })
// })
router.get('/:id', (req, res) => {

    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).json('NOT FOUND');
    res.json(users);
})
router.post('/:id', (req, res) => {

    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).json('NOT FOUND');
    res.json(users);
})
module.exports = router;