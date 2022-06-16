var express = require('express')
var app = express()
var {connectToDb,getDbConnection} = require('./db')
var {ObjectId} = require('mongodb')
let dbs
app.use(express.json())
connectToDb((err)=>{
    console.log("db code from express")
    if(!err)
    {
        app.listen(7090,()=>{
            console.log("Server running on PORT:7090")
        })
        dbs = getDbConnection()
    }
})
