const express = require("express");
const app = express();
const qrCode = require("qrcode");
app.use(express.json());
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.post("/qr",async (req,res)=>{
    let link = req.body.data
    let genQr = await qrCode.toDataURL(link)
    res.json(genQr)
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});