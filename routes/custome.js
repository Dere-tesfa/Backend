const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'dereje' },
    { id: 2, name: 'alex' },
    { id: 3, name: 'bro' },
];

// GET user by id
router.get('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// CREATE new user
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    const newUser = {
        id: users.length + 1,
        name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE user by id
router.put('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name } = req.body;
    if (name) user.name = name;

    res.json(user);
});

// DELETE user by id
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(c => c.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser[0]);
});

module.exports = router;
