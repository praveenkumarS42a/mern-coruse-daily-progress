const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public"))); // This is to serve static files like CSS, JS, images, etc.
const pug = require("pug");
const {engine} = require("express-handlebars");
app.engine("hbs", engine({extname: ".hbs",defaultLayout:false}));
app.set("view engine", "hbs");

app.get("/home", (req, res) => {
    let data = "Test Value";
    let array = [1,2,3,4,5]
    res.render("index", {data,array});
})

app.get("/about", (req, res) => {
    let array = [1,2,3,4,5]
    res.render("about", {array});
})

app.get("/contact", (req, res) => {
    let title = "Contact";
    res.render("contact", {title});
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});