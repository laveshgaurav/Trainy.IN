const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./modals/StudentContact');
const College = require('./modals/CollegeContact');
const Corporate = require('./modals/CorporateContact');

const port = process.env.PORT || '3000';
app.listen(port, () => console.log("Listening to 3000..."));


mongoose.connect('mongodb+srv://laveshgaurav:lavesh1998@cluster0-y6avx.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true},()=>console.log('Connected To MongoDB'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));
app.use('/Css', express.static('Css'));
app.use('/Js', express.static('Js'));



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/students.html', function (req, res) {
    res.sendFile(__dirname + '/students.html');
});
app.get('/contactStudent.html', function (req, res) {
    res.sendFile(__dirname + '/contactStudent.html');
});
app.get('/contactCollege.html', function (req, res) {
    res.sendFile(__dirname + '/contactCollege.html');
});
app.get('/contactCorporate.html', function (req, res) {
    res.sendFile(__dirname + '/contactCorporate.html');
});
app.post('/contactStudent', async (req, res)=> {
    console.log(req.body);
    const StudentNew = new Student(req.body);

    try{
    const savedStudent = await StudentNew.save();
    res.json(savedStudent);
    } catch(err){
        res.json({message:err});
    }
    });
    app.post('/contactCollege', async (req, res) => {
        console.log(req.body);
        const CollegeNew = new College(req.body);

        try {
            const savedCollege = await CollegeNew.save();
            res.json(savedCollege);
        } catch (err) {
            res.json({
                message: err
            });
        }
    });
    app.post('/contactCorporate', async (req, res) => {
        console.log(req.body);
        const CorporateNew = new Corporate(req.body);

        try {
            const savedCorporate = await CorporateNew.save();
            res.json(savedCorporate);
        } catch (err) {
            res.json({
                message: err
            });
        }
    });


