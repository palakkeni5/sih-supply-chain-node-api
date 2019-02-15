require('./config/config')


const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')
const _ =require('lodash')

var { Sample } =require('./models/sample')
var {mongoose} = require('./db/mongoose');


var app=express();
app.use(bodyParser.json());

app.post('/sample',(req,res)=>{
    console.log(req.body);

    var samp1 = new Sample({
        text : req.body.text ,
        completed : req.body.completed,
        completedAt : req.body.completedAt
    })

    samp1.save().then((data)=>{
        console.log(data)
        res.send(data)
    },(error)=>{
        console.log(error)
        res.status(400).send(e)
    })
})

app.get('/sample',(req,res)=>{
    Sample.find().then((data)=>{
        res.send({data});
    },(e)=>{
        res.status(400).send(e);
    })
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})