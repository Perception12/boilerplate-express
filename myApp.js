let express = require('express');
let app = express();
require('dotenv').config();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    var response = "hello json";
    if (process.env.MESSAGE_STYLE == 'uppercase'){
        response = response.toUpperCase();
    }

    return res.json({"message": response});
})


































 module.exports = app;
