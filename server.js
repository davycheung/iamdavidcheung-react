const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const reading = require("./src/services/articles");

app.use(favicon(__dirname + "/build/favicon.ico"));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/api/articles", function (req, res) {
    res.send(reading);
});
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);
