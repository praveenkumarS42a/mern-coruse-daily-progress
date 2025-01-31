const {Schema,model} = require("mongoose")
const todoSchema =  new Schema({
    'task':String
})
module.exports = model("task",todoSchema)
