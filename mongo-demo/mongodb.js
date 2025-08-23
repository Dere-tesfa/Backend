// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/ethio", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log("✅ Connected to MongoDB");

//         // Now you can start working with your DB
//     })
//     .catch((err) => {
//         console.error("❌ Error connecting to MongoDB:", err.message);
//     });

// const studeSchema = new mongoose.Schema({
//     name: String,
//     id: Number

// })
// const Student = mongoose.model('Student', studeSchema);
// const student = new Student({
//     name: 'dereje',
//     id: 1234
// })
// // Save the student to the database
// async function createStudent() {
//     const result = await student.save();
//     console.log(result);
// }
// createStudent();

//practice2
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/ethio")


//     .then(() => {
//         console.log('connected to mongoDb');

//     })
//     .catch((err) => {
//         console.log('error connecting to mongoDb', err.message);

//     })

// const StudentSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
//     pasword: String

// })
// const Student = mongoose.model('Student', StudentSchema)
// const student = new Student({
//     name: 'bro',
//     email: 'dereje383@gmail.com',
//     age: 22,
//     pasword: 1234567
// })
// // Save the student to the database
// const result = student.save();
// console.log(result);

//practice3
// const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/ethio'
// mongoose.connect(db)
//     .then(() => {
//         console.log('connected to mongodb');


//     })
//     .catch((err) => {
//         console.log('error connecting to mongodb', err.message);

//     })

// const SignupSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String

// })
// const signup = mongoose.model('sighnup', SignupSchema);
// const user = new signup({
//     name: 'demo',
//     email: 'demo@123.gmail.com',
//     password: 123
// })
// const save = user.save();
// console.log(save);

// parctice4

// const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/ethio'
// mongoose.connect(db)
//     .then(() => {
//         console.log('connected to mongodb');

//     })
//     .catch((err) => {
//         console.log('error connecting to mongodb', err.message);;

//     })
// const loginSchema = new mongoose.Schema({
//     name: String,
//     password: String
// })
// const login = mongoose.model('login', loginSchema);
// const LoginUser = new login({
//     name: 'dereje',
//     password: '123456'
// })
// const SaveUser = LoginUser.save();
// console.log(SaveUser);

//practice5
// const mongoose = require('mongoose');
// const db = 'mongodb.http//:localhost:27017/ethio';
// mongoose.connect(db)

//     .then(() => {
//         console.log('connected to mongodb');

//     })
//     .catch((err) => {
//         console.log('connecting error to mongodb', err.message)
//     })

// const userSchema = new mongoose.Schema({
//     name: String,
//     password: String
// })
// const user = mongoose.model('login', userSchema);
// const createUser = new user({
//     name: 'dereje',
//     password: '123456'
// })
// const saveusers = createUser.save();
// console.log(saveusers);


//practice 6
// const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/students'

// mongoose.connect(db)
//     .then(() => {
//         console.log('connected to mongodb!');

//     })

//     .catch((err) => {
//         console.log('coonnecting error to mongodb ', err.message);

//     })

// const BookSchema = new mongoose.Schema({
//     bookName: String,
//     title: String,
//     page: String


// })
// const Book = mongoose.model('Book', BookSchema);
// const userBook = new Book({
//     bookName: 'c++',
//     title: 'variable',
//     page: '1'
// })
// const bookSave = userBook.save();
// console.log(bookSave);


//practice 7
// const mongoose = require('mongoose');
// const db = 'mongodb://localhost:27017/ethio';
// mongoose.connect(db)
//     .then(() => {
//         console.log('connected to mongodb');

//     })
//     .catch((err) => {
//         console.log('connection error to mongodb...', err);

//     })

// const ethioUser = new mongoose.Schema({
//     name: String,
//     id: String,
//     password: String

// })
// const ethiopia = mongoose.model('ethiopia', ethioUser);
// const createEthio = new ethiopia({
//     name: 'gebre',
//     id: '12we',
//     password: '12345ge'
// })
// const ethioSave = createEthio.save();
// console.log(ethioSave);


//practice 8
const userSchema = require('../modul/config')
const mongoose = require('mongoose');
const db = 'mongodb://localhost:/ethio';
mongoose.connect(db)
    .then(() => {
        console.log('connected to mongodb');

    })
    .catch((err) => {
        console.log('connection error to mongodb...', err.message);

    })
module.exports = userSchema;

// const Department = new mongoose.Schema({
//     dep: String,
//     course: String,
//     courseCode: String,
//     courseTitle: String
// })
// const ethioDep = mongoose.model('ethioDep', Department);
// const createDep = new ethioDep
//     ({
//         dep: 'IT',
//         course: 'db,c++',
//         courseCode: 'esr22',
//         courseTitle: 'dere'

//     })
// const createSaveDep = createDep.save();
// console.log(createSaveDep);
// module.exports = ethioDep;
