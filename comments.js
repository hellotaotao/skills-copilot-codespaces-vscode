// Create web server
// npm install express
// npm install body-parser

// Load modules
var express = require('express');
var bodyParser = require('body-parser');

// Create web server
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

// Create data
var comments = [
    {name: '张三', message: '今天天气不错!', dateTime: '2019-10-30'},
    {name: '李四', message: '今天天气真好!', dateTime: '2019-10-31'},
    {name: '王五', message: '今天天气真不错!', dateTime: '2019-11-01'},
    {name: '赵六', message: '今天天气真好啊!', dateTime: '2019-11-02'},
    {name: '田七', message: '今天天气真不错啊!', dateTime: '2019-11-03'}
];

// Request comments
app.get('/comments', function (req, res) {
    res.json(comments);
});

// Add comments
app.post('/addComment', function (req, res) {
    var comment = req.body;
    comment.dateTime = '2019-11-04';
    comments.unshift(comment);
    res.redirect('/');
});

// Run server
app.listen(3000, function () {
    console.log('Server running at http://