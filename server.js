const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name: 'Jill'}
]

// NOTE: github had the app.get after trying to use "node server.js"
// this doesn't work
// there's no message of "server is running" without the app.get below


app.get('/users/:id', function(req, res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user, good shit',
        users: req.params.id
    })
})

app.post('/login', function(req, res) {
    const username=req.body.username;
    const password = req.body.password;

    const mockUsername="assMan";
    const mockPassword ="superSecret";

    if(username==mockUsername && password==mockPassword) {
        res.json({
            success: true,
            message:'passage and username match',
            token: 'encrypted token goes here'
        })
    } else {
        res.join ({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen(8000, function() {
    console.log("server is running")
});
