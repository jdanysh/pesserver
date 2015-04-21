var express = require('express');
var router = express.Router();

// var mongoose = require('mongoose');

// var User = mongoose.model('User', {
//     id:Number,
//     name:{
//         firstName:String,
//         lastName:String
//     },
//     role:String,
//     email:String,
//     password:String,
//     accountCreated:{type:Date, default: Date.now},
//     lastConection:String,
//     lastIp:String,
//     videoWatched:Array,
//     userStatus:String,
//     lastVideoWatched:String
// });



//function getNextSequence(name) {
//    var ret = mongoose.counters.findAndModify(
//        {
//            query: { _id: name },
//            update: { $inc: { seq: 1 } },
//            new: true
//        }
//    );
//
//    return ret.seq;
//}




//function a





//var juan = new User({});



//juan.save(function(err){
//    if(err){
//        return err;
//    }
//})


/*GET*/
router.get('/', function (req, res) {
    res.send('respond with a resource');
    //console.log(Counters.find());
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
