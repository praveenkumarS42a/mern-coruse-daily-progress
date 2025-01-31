const mongoose = require("mongoose");
async function db(){
    try{
        await mongoose.connect('mongodb://localhost:27017/course');
        console.log("database successfully connected");
    }catch(e){
        console.log("error on connection db");
    } 
}


module.exports = db