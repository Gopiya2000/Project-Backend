var {MongoClient} = require('mongodb')
let dbConnection
module.exports = {
    connectToDb : (callback)=> {
        console.log("db code from db file")
        MongoClient.connect('mongodb://0.0.0.0:27017/Demo')
        .then((client)=>{
            dbConnection = client.db()
            return callback()
        })
        .catch((err)=>{
            console.log(err)
            return callback(err)
        })
    },
    getDbConnection : () => dbConnection
}


