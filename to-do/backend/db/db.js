const mongoose = require("mongoose")

async function DB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo")
        console.log("connected to db")
    } catch (error) {
        console.error("DB connection error:", error)
    }
}

module.exports = DB