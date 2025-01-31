const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        min: 20,
        max: 100
    },
    email: {
        type: String, 
        required: true,
        minLength: 10
    },
    friend: {
        type: Schema.Types.ObjectId,
        
    },
    address: {
        state: String,
        pincode: Number
    },
    hobbies: [String]
});

module.exports = model("customer", customerSchema);