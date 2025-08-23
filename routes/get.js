const express = require('express');
const router = express.Router();
let courses = [
    { id: 1, name: 'Herro' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'gender' },
];
let users = [
    { id: 4, name: 'derje' },
    { id: 5, name: 'derje' },
    { id: 6, name: 'derje' }
];
router.get('/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('the course with the given id was not found!');
    res.json(courses)
})
router.get('/:id', (req, res) => {
    let user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send('<h1>404 not found</h1>')
    res.json(users)

});

router.get('/:id', (req, res) => {
    let user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send('404 not found!')
    res.json(user)
})


router.get('/', (req, res) => {
    let code = users.find(c => c.id === parseInt(req.params.id))
    if (!code) res.status(404).send('400 not found!')
    res.json(users);
})

router.get('/', (req, res) => {
    let name = users.find(c => c.id === parseInt(req.params.id));
    if (!name) res.status(404).send('not found!');
    res.json(users);
    users.indexOf(name);

})



module.exports = router;