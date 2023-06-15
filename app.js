const express = require('express');
const mongoose = require('mongoose');
const Person = require('./model/index');

const app = express();

const port = 5000;
app.get('/', (req, res) => {
const person = new Person ({ firstName:'lucky', lastName:'mary', email:'lucky@gmail.com',  password: 'goat'})
    console.log(person)
person.save()
    res.send('running');
});

app.listen(port,()=>{
    console.log("server has started")
})

const CONNECTION_URL = 'mongodb+srv://olaisaac101:b0cEcZ9fgEXk4r5M@cluster0.k8tjojf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});