var express = require('express');
var router = express.Router();
var userController = require('../controller/user/userController');
const read = require('../controller/test/read')
const redirect = require('../controller/test/redirect')
const wooCommerce = require('../controller/wooCommerce/wooCommerceController')

const auth =  require('../middlewares/auth')    // middleware imported

router.post('/register', userController.register)
router.post('/signin', userController.signin)
router.put('/update', auth, userController.update)          // middleware added here
router.get('/readFile', read.read)

router.get('/g', redirect.redirect)

router.get('/wooCommerce', wooCommerce.wooCommerce)



module.exports=router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
