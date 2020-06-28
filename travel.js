var express=require('express');
var app=express();
var handlebars=require('express-handlebars').create({defaultLayout:"main"});
let bodyParser=require("body-parser");
let cookieParser=require("cookie-parser");
let session=require("express-session");
app.engine("handlebars",handlebars.engine);
app.set("view engine","handlebars");
//app.set('port',8080);
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session({secret:"Shhhhh"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
  app.get("/",function(req,res){
     // res.cookie("Hello","World");//set cookie
      //let cookie=req.cookies["Hello"];
     // if(req.session.page_views)
//{
      //    req.session.page_views++;
      //    res.send("You have visited this page "+req.session.page_views+" times");
     // }
    // else{
      //   req.session.page_views=1;
        // res.send("Welcome to this site");
   //  } 
      res.render("home");
       //get cookie
      // res.clearCookie("Hello");
 
  })
 
  app.get("/signup",function(req,res){
    res.render("signup");
})
app.get("/gsignup",function(req,res){
  res.render("gsignup");
})
  app.get("/about",function(req,res){
      var quotes=["a","b","c","d","e"];
      var randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
    res.render("about",{quote:randomQuote,variable:"Hello"});
})
app.get("/thankyou",function(req,res){
    var name=req.query.name;
    var email=req.query.email;
    var phone =req.query.phone;
    var pass =req.query.password;
    res.render("thankyou",{name:name,email:email,pass:pass,phone:phone});
})
app.post("/thankyou",function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var phone =req.body.phone;
    var pass =req.body.password;
    res.render("thankyou",{name:name,email:email,pass:pass,phone:phone});
})

// app.get("/about",(req,res)=>{
// res.type("text/plain");
// res.send("about route");
// })
// app.get("/",(req,res)=>{
//     res.type("text/plain");
//     res.send("Page Not Found");
//     })
//     app.get("/about/other",(req,res)=>{
//         res.type("text/plain");
//         res.send("other route");
//         })
//         app.use(function(req,res){
//             res.type("text/plain");
//              res.status(404);
//             res.send("About "); 
//           })
app.listen(8080,()=>{
    console.log("listening");
})
