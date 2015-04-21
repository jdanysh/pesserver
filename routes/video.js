var express = require('express');
var router = express.Router();








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
