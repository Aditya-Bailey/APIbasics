var fs = require('fs');

var read = ((req,res)=>{

    var obj = JSON.parse(fs.readFileSync('testing.json', 'utf8'));    

    console.log('====', obj)
    return res.json({
        obj
    })

});

module.exports={read};