const mongoose = require("mongoose");
const cust = require("./schema")
async function db(){
    try{
        await mongoose.connect('mongodb://localhost:27017/customer');
        console.log("database successfully connected");
    }catch(e){
        console.log("error on connection db");
    } 
    // const newCustomer = new cust({
    //     name:" kumar",
    //     age:21,
    //     address:{
    //         pincode:123456,
    //         state:"TN"
    //     },
        
    //     hobbies:["gaming","singing"]

    // })
    // newCustomer.save()
    // const newCustomer = await cust.create({
    //     name:"kumar",
    //         age:80,
    //         email:"prav@gmailc.com",
    //         friend:"67985c9498e0d5ed28226259",
    //         address:{
    //             pincode:123456,
    //             state:"TN"
    //         },
    //         hobbies:["gaming","singing"]
    // })
    // console.log(newCustomer)
    // newCustomer.save()
    // const newCustomer = await cust.find().where("name").equals("praveen kumar").limit(1)
    // console.log(newCustomer);
    const customerData = await cust.findById("67985c9498e0d5ed28226259").populate("friend")
    console.log(customerData)

    const update = await cust.updateOne({name:"praveen kumar"},{$set:{age:30}})
    console.log(update);
}
db()
