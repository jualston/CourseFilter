//restapi

var express = require("express")
var app = express();


var api_routes= require ('./api_route.js')
app.use('/api', api_routes);
app.use('/demo', express.static('front_end'));

app.listen(3000,function(){
  console.log("Server running")
})
