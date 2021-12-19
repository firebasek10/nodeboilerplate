const router = require("express").Router();


router.get('/getadmin',  function(req, res){
    res.send('user test is successful')
});

router.post('/userposttest', function(req, res){
    const username = req.body.username;
    console.log(username)
})

module.exports = router