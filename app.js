var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    methodOverride = require("method-override");
    
// APP CONFIG
mongoose.connect("mongodb://localhost/recipies_book");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

// MONGOOSE/MODEL CONFIG
var recipieSchema = new mongoose.Schema({
   title: String,
   image: String,
   description: String,
   created: {type: Date, default: Date.now}
});

var Recipie = mongoose.model("Recipie", recipieSchema);


// Recipie.create({
//     name: "Brownie",
//     image: "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?ixlib=rb-0.3.5&s=afe185852029b972b16dd7e33830f7c6&auto=format&fit=crop&w=680&q=80",
//     description: "That's the best gluten-free Brownie in the world!"
//}); 


// ROUTES

app.get("/", function(req, res) {
    res.render("home")
});

// INDEX route
app.get("/recipies", function(req, res) {
    Recipie.find({}, function(err, recipies) {
        if (err) {
            console.log("Error!");
        } else {
            res.render("index", {recipies: recipies});
        }
    })
}); 

// NEW -  route
app.get("/recipies/new", function(req, res) {
    res.render("new");
});

// CREATE route
app.post("/recipies", function(req, res) {
    Recipie.create(req.body.recipie, function(err, newRecipie) {
        if (err) {
            res.render("new");
        } else {
            // redirect to recipies page
            res.redirect("/recipies"); 
        }
    });
});

// SHOW route
app.get("/recipies/:id", function(req, res) {
   Recipie.findById(req.params.id, function(err, foundRecipie) {
       if (err) {
           console.log("Error!");
       } else {
           res.render("show", {recipie: foundRecipie});
       }
   });
});

// EDIT route
app.get("/recipies/:id/edit", function(req, res) {
   Recipie.findById(req.params.id, function(err, recipieFound) {
      if (err) {
          console.log(err);
      } else {
          res.render("edit", {recipie: recipieFound});
      }
   });
});

//UPDATE route
app.put("/recipies/:id", function(req, res) {
    Recipie.findByIdAndUpdate(req.params.id, req.body.recipie, function(err, recipieUpdated) {
       if (err) {
           console.log(err);
       } else {
           res.redirect("/recipies/" + req.params.id);
       }
    });
});

// DELETE route 
app.delete("/recipies/:id", function(req, res) {
  // destroy route
  Recipie.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      res.redirect("/recipies");
    } else {
      res.redirect("/recipies");
    }
  });
  // redirect somewhere
});




// sets the space where we can review app
app.listen(3000, function() {
    console.log("Server has started!");
});