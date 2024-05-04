let http = require("http");
let dt = require('./myfirstmodule');
http
  .createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
	res.write("Time:" + dt.myDateTime());
	res.end();
  })
  .listen(8080);
