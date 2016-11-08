var http = require('http');
var fs = require('fs');
var md = require('markdown');

var message = "It doesnt work";
var port = 8000;

message = fs.readFileSync("index.md", "utf8", "r");
sendMessage = md.parse(message);

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(sendMessage);
});

console.log("http://127.0.0.1:" + port);
server.listen(port);
