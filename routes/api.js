var express = require('express');
var router = express.Router();
var userController = require('../controller/user/userController');
const read = require('../controller/test/read')
const redirect = require('../controller/test/redirect')

router.post('/register', userController.register)
router.post('/signin', userController.signin)

router.get('/readFile', read.read)

router.get('/g', redirect.redirect)



module.exports=router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
