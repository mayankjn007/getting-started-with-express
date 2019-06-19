var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("home"); 
});
app.get("/fellinlove/:thing",function(req,res){
    var thing = req.params.thing;
   res.render("love",{thingVar:thing}); 
});
app.get("/posts",function(req, res) {
   var posts = [
         {title: "Post1" , author: "RandomOne"},
         {title: "Post3" , author: "RandomOne"},
         {title: "Post2" , author: "RandomOne"}
       ] 
       res.render("posts", {posts: posts});
});
app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server is listening"); 
});