const User =  require('../../model/userModel')


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
                return res.json({
                    status	: 	true,
                    message	: 	'Login Successful',
                }); 
            }else{
                res.send({status:false,message:'email/password incorrect'});
            }
        }else{
            res.send({status: false, message:"user does not exist"})
        }

        })

});

module.exports={register, signin};