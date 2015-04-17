var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Playlist = mongoose.model('Playlist', {
    id:String,
    title:String,
    description:String,
    authors:Array,
    dateUpload:{type:Date, default: Date.now},
    sheetFileUrl:String,
    sheetPresentationUrl:String,
    sheetInnovationUrl:String,
    videos:Array
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
