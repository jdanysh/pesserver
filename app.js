var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');



//var uri = 'mongodb://localhost:27017/pesserver'/*,options*/;

var uri = 'mongodb://localhost:27017/pesserver'/*,options*/;
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('Connected to:',uri);
});

var routes = require('./routes/index');
var users = require('./routes/user');
var videos = require('./routes/video');
var playlists = require('./routes/playlist');

var app = express();


var Counter = mongoose.model('Counter', {
    type:String,
    seq:Number
});




function CheckCounter(){
    var element = ['userId','videosId','playListId'];

    function itemCheck(name){
        Counter.find({type:name},function(e,doc){
            //console.log(name,e,doc);
            if(doc==[]){

                var juan = new Counter({
                    type:name,
                    seq:0
                });

                juan.save(function(err){
                    if(err){
                        console.log('Error',err);
                    }
                });
            };
        });
    };


    Counter.find({type:'userId'},function(e,doc){console.log('find',doc[0])});

    for (i = 0; i < element.length; i++) {
        itemCheck(element[i]);
    }
}
CheckCounter();


function getNextSequence(name) {

    var x=Counter.find({type:name},function(e,d){});



};



//var bb = getNextSequence('userId');

//console.log(Counter.find(function(e,d){return d}));d
console.log('get',getNextSequence('userId'));


//



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/videos', videos);
app.use('/playlists', playlists);
//







/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;
