var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var students = [{
        studentID: 1312241,
        fullName: "Anh Huy Nguyen",
        GPA: 9.0
    },
    {
        studentID: 1312276,
        fullName: "Ke Nguyen Phu",
        GPA: 9.5
    },
    {
        studentID: 1312265,
        fullName: "Hung Minh Diep",
        GPA: 9.0
    }];


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/api/students')
    .get(function (req, res) {
        res.json(students);
    })
    .post(function (req, res) {
        students.push(req.body);
        res.json(students);
    });

app.route('/api/student/:id')
    .get(function (req, res) {
        res.json(students[req.params.id]);
    })
    .delete(function (req, res) {
        students.splice(req.params.id, 1);
        res.json(students);
    })
    .put(function (req, res) {
        students[req.params.id] = req.body;
        res.json(students);
    });

app.listen(8080, function () {
    console.log('Server running at http://localhost:8080');
});