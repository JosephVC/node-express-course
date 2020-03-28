const express = require('express');
const app = express();

const mockUserData=[
    {name:'Mark'},
    {name: 'Jill'}
]

// NOTE: github had the app.get after trying to use "node server.js"
// this doesn't work



app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users.  good shit',
        users: mockUserData
    })
})

app.listen(8000, function() {
    console.log("server is running")
});
