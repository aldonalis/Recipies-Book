var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    methodOverride = require("method-override"),
    Recipe        = require("./models/recipe"),
    Comment        = require("./models/comment"),
    seedDB         = require("./seeds");
    
// APP CONFIG
mongoose.connect("mongodb://localhost/recipes_book");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
seedDB();

// ROUTES

app.get("/", function(req, res) {
    res.redirect("/recipes");
});

// INDEX route
app.get("/recipes", function(req, res) {
    Recipe.find({}, function(err, recipes) {
        if (err) {
          console.log(err);
          console.log("Error!");
        } else {
            res.render("index", {recipes: recipes});
        }
    })
}); 

// NEW -  route
app.get("/recipes/new", function(req, res) {
    res.render("recipes/new");
});


// CREATE route
app.post("/recipes", function(req, res) {
    Recipe.create(req.body.recipe, function(err, newRecipe) {
        if (err) {
            console.log(err);
        } else {
            // redirect to recipes page
            res.redirect("/recipes"); 
        }
    });
});

// SHOW route
app.get("/recipes/:id", function(req, res) {
  Recipe.findById(req.params.id).populate("comments").exec(function(err, foundRecipe) {
       if (err) {
           console.log(err);
       } else {
          console.log(foundRecipe);
          res.render("recipes/show", {recipe: foundRecipe});
       }
   });
});

// EDIT route
app.get("/recipes/:id/edit", function(req, res) {
   Recipe.findById(req.params.id, function(err, recipeFound) {
      if (err) {
          console.log(err);
      } else {
          res.render("recipes/edit", {recipe: recipeFound});
      }
   });
});

//UPDATE route
app.put("/recipes/:id", function(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body.recipe, function(err, recipeUpdated) {
       if (err) {
           console.log(err);
       } else {
           res.redirect("/recipes/" + req.params.id);
       }
    });
});

// DELETE route 
app.delete("/recipes/:id", function(req, res) {
  // destroy route
  Recipe.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      res.redirect("/recipes");
    } else {
      res.redirect("/recipes");
    }
  });
});



// =====================
// COMMENTS ROUTES
// =====================

//NEW route (displays the form)
app.get("/recipes/:id/comments/new", function(req, res) {
  recipe.findById(req.params.id, function(err, recipe) {
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", {recipe: recipe});
    }
  });
});

// CREATE route  
app.post("/recipes/:id/comments", function(req, res) {
  recipe.findById(req.params.id, function(err, recipe) {
    if (err) {
      console.log(err);
    } else {
      Comment.create(req.body.comment, function(err, newComment) {
          if (err) {
            console.log(err);
            //res.redirect("/recipes/:id/comments/new");
          } else {
            recipe.comments.push(newComment);
            recipe.save();
            res.redirect("/recipes/" + req.params.id);
          }
        });
    }
  });
});

// EDIT route
app.get("/recipes/:id/comments/:comment_id/edit", function(req, res) {
  recipe.findById(req.params.id, function(err, recipe) {
    if (err) {
      console.log(err);
    } else {
      Comment.findById(req.params.comment_id, function(err, foundComment) {
          if (err) {
            console.log(err);
          } else {
            res.render("comments/edit", {recipe: recipe, comment: foundComment});
          }
        });
    }
  });
});

// UPDATE route 
app.put("/recipes/:id/comments/:comment_id", function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/recipes/" + req.params.id);
      }
  });
});

//DELETE route
app.delete("/recipes/:id/comments/:comment_id", function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, req.body.comment, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/recipes/" + req.params.id);
    }
  });
});






// sets the space where we can review app
app.listen(3000, function() {
    console.log("Server has started!");
});