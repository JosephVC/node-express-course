const express = require('express');
const app = express();

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

app.listen(8000, function() {
    console.log("server is running")
});
