const User =  require('../../model/userModel')
const jwt = require('jsonwebtoken')
const JWTSECRET = 'thisIsSecretKey-CouldBeAnything';

var register = ((req,res,next)=>{

    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    // check in db if the user exist or not
    User.findOne({email: user.email}).then((response)=>{
        if(!response){
            user.save().then((doc)=>{
                if(doc){
                    res.send({status: true, message : 'user saved'});
                }else
                {
                    res.send({status:false, message:'user not saved'});
                }
            })
        }else{
            res.send({status: false, message: 'user already exist'});
        }
    })
});


var signin=((req,res,next)=>{
    var log = {
        email: req.body.email,
        password: req.body.password
    };
        User.findOne({email: log.email}).then((doc)=>{
            if(doc){
           // console.log("user",doc);
            if(doc.password==log.password){
                let token = jwt.sign({ userId: doc._id },JWTSECRET);
                console.log('>>>>>', token);
                
                return res.json({
                    status	: 	true,
                    message	: 	'Login Successful',
                    token
                });
            }else{
                res.send({status:false,message:'email/password incorrect'});
            }
        }else{
            res.send({status: false, message:"user does not exist"})
        }

        })

});

var update = ((req, res)=>{
    console.log('UPDATE PROFILE HERE')
    return res.json('UPDATE PROFILE HERe')
})

module.exports={register, signin, update};