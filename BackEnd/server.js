const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Creating a schema for book 
const Schema = mongoose.Schema;

//setting up the online database on mongodb
const mongoDB = 'mongodb+srv://admin:admin@cluster0-qpazo.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Creating the book schema
const bookSchema = new Schema({
    title:String,
    year:String,
    cover:String,
    summary:String,
    rating:String
})

//Using bookModel to write to the mondgodb database
const BookModel = mongoose.model('bookDetails', bookSchema);

//Setting up the get methods for all the parameters required for the page
app.get('/bookDetails/:title', (req, res) => {
    BookModel.findOne({title:req.params.title},
    (error,data)=>{
        res.json(data);
    })
})

app.get('/api/bookDetails', (req, res) => {

    BookModel.find((error, data) =>{
        res.json({bookDetails:data});
    })
})

app.get('/api/bookDetails/:id', (req, res)=>{
    console.log(req.params.id);

    BookModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

//Creating the delete button function
app.delete('/api/bookDetails/:id', (req, res)=>{
    console.log(req.params.id);

    BookModel.deleteOne({ _id: req.params.id},
        (error, data) =>{
            res.json(data);
        });
})

//Creating the edit button function
app.put('/api/bookDetails/:id',(req,res)=>{
    console.log("Edit: "+req.params.id);
    console.log(req.body);
    
    BookModel.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true},
        (error,data)=>{
            if(error)
                console.log(error);
            
            console.log(data);
            res.json(data);
        })
})

//Add book
app.post('/api/bookDetails', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.cover);
    console.log(req.body.summary);
    console.log(req.body.rating);

    BookModel.create({
        title:req.body.title, 
        year:req.body.year, 
        cover:req.body.cover,
        summary:req.body.summary,
        rating:req.body.rating
    });

    
    res.send('post recieved!');
})
app.get('/bookDetails',(req,res)=>{
    res.sendFile(path.join(_dirname + '/index.html'));
});

app.get('/api/bookDetails/:id', (req,res)=>{
    console.log("GET: "+req.params.id);

    BookModel.findById(req.params.id,(error, data)=>{
        res.json(data);
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))