const express = require('express');
const expressLeyouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();


// DB config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


// EJS
app.use(expressLeyouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({extended: false}));


// Routes
app.use('/', require('./routes/index'));
app.use('/blog', require('./routes/blog'));
app.use('/admin', require('./routes/admin'));



const PORT = process.env.PORT || 2100;

app.listen(PORT, console.log(`Server started on port ${PORT}`));