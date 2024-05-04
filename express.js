// const express = require("express");
// const app = express();
// const port = 8080;
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
// app.get("/foo", function (req, res) {
//   res.send("<h1>Foo Page</h1>");
// });
// app.listen(port, function () {
//   return console.log("port " + port);
// });

const express = require("express");
const app = express();
const port = 8080;
//app.use(express.static(__dirname));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/1", function (req, res) {
  res.sendFile(__dirname + "/winter.html");
});
app.get("/2", function (req, res) {
    res.sendFile(__dirname + "/summer.html");
  });
app.listen(port, function () {
  return console.log("port is " + port);
});

