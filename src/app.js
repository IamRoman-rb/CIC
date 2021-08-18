const path = require("path");
const express = require("express");
const method = require("method-override");
const session = require("express-session");
const cookie = require("cookie-parser");
const app = express();


app.set("port", process.env.PORT || 3500);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.listen(app.get("port"), () => console.log("Server Start"))

//Public Access
app.use(express.static(path.resolve(__dirname,"../public")));

//App Middleawes
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(method("_method"))
app.use(cookie());
app.use(session({
    secret: "Iamroman_ok",
    resave: true,
    saveUninitialized: true
}));

//Middlewares Customs
//app.use(require("./middlewares/"));

//Websites Routes Requires
const main = require("./routers/main");
app.use(main);
// const user = require("./routers/user");
// app.use(user); 