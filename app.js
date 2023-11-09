var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var movies = require("./models/movies");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var express = require('express');
var router = express.Router();

var resourceRouter = require('./routes/resource');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('choose', { title: 'Choose' });
});


module.exports = router;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await movies.deleteMany();
    
    let instance1 = new
    movies({movie_name: 'pookri', director: 'puri', rating: 4.5});
    instance1.save().then(doc=>{console.log("instance1 saved");}).catch(err=>{console.error()});

    let instance2 = new
    movies({movie_name: 'bhubali', director: 'mouli', rating: 4.2});
    instance2.save().then(doc=>{console.log("instance2 saved");}).catch(err=>{console.error()});

    let instance3 = new
    movies({movie_name: 'dookudu', director: 'sreenu', rating: 4.9});
    instance3.save().then(doc=>{console.log("instance3 saved");}).catch(err=>{console.error()});

     }
    
    let reseed = true;
    if (reseed) { recreateDB();}


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
