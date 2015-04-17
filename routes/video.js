var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Video = mongoose.model('Video', {
    id:Number,
    title:String,
    vimeoId:String,
    dateUpload:{type:Date, default: Date.now}
});




var juan = new Video({
    id:1,
    title:'check video',
    vimeoId:'eeeeee'
});


juan.save(function(err){
    return {
        'error':err
    }
});


/*GET*/
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

/*Create*/
router.post('/', function (req, res) {
    console.log(req.body);
});

//Delete
router.delete('/:id',function(req,res){
    console.log(req.params.id);
});

/* GET users listing. */
router.put('/:id', function(req, res) {
    console.log('put', req.params.id);
});



module.exports = router;
