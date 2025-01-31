const app=require("./app")
let port=process.env.PORT || 3000
app.listen(port,()=>console.log("http://127.0.01:3000"))