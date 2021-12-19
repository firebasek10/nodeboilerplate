const router = require("express").Router();


router.get('/getadmin',  function(req, res){
    res.send('user test is successful')
});

router.post('/userposttest', function(req, res){
    const username = req.body.username;
    res.send('your username is ' + username)
})

module.exports = router