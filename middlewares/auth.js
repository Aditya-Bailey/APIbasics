const jwt = require('jsonwebtoken')
const JWTSECRET = 'thisIsSecretKey-CouldBeAnything';

const auth = ((req, res, next)=>{
    let token = req.header('Authorization')
    jwt.verify(token,JWTSECRET,(err, decoded)=>{
        console.log('-----', decoded);
        
        if(err || decoded === undefined){
            return res.json({
                status:"error",
                msg:"token not valid"
            })
        }else{
            req.user = decoded.userId     // assigned userId to req.user | Now req.user can be accessed anywhere from user 
            next()      // next lets you perform next activity as assigned in route. | Check the route for update you will understand 
        }
    });
})

module.exports = auth
