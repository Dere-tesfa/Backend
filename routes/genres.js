const express = require('express');
const router = express.Router();
const genders = [
    { id: 1, name: 'Herro' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Romance' }
]

router.get('/', (req, res) => {
    const gender = genders.find(c => c.id === parseInt(req.params.id));
    if (!gender) res.status(200).json('NOT FOUND!')
    res.json(genders)
})
module.exports = router;