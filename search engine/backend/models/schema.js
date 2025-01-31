const {Schema,model} = require("mongoose")
const courseDetails = new  Schema({
    title:"string",
    description:"string"
})
module.exports = model("course",courseDetails)
