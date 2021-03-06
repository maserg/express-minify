var minify = require('express-minify');
var express = require('express');
var app = express();

app.use(minify(
{
    blacklist: [
        /\.min\.(css|js)$/
    ]
}));
app.use(express.static(__dirname + '/static'));

app.listen(8080);