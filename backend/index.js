const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Usermodel = require('./models/Users')

require('dotenv').config();
const MONGO_URI=process.env.MONGO_URI;

const app = express()
app.use(cors()) 
app.use(express.json())

mongoose.connect(MONGO_URI)

app.get('/getUsers', (req, res) => {
    Usermodel.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:'+ err));
});

app.get('/', (req, res) => {
    return res.json({service: "Running"})
});


app.listen(3001,() => {
    console.log('Server is running on port 3001')
});