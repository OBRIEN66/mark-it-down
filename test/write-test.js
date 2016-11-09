var fs = require('fs');
var head = "<!DOCTYPE html><html><head><title>Markdown</title><link rel=\"stylesheet\" type=\"text/css\" href=\"markdown.css\"></head>"
fs.writeFile("index.html", head, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 