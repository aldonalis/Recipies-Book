var express = require("express"),
    router  = express.Router(),
    Recipe = require("../models/recipe"),
    User = require("../models/user"),
    Comment = require("../models/comment");


// INDEX route
router.get("/", function(req, res) {
    Recipe.find({}, function(err, recipes) {
        if (err) {
          console.log(err);
          console.log("Error!");
        } else {
            res.render("index", {recipes: recipes, currentUser: req.user});
        }
    })
}); 

// NEW -  route
router.get("/new", isLoggedIn, function(req, res) {
    res.render("recipes/new");
});


// CREATE route
router.post("/", isLoggedIn, function(req, res) {
  Recipe.create(req.body.recipe, function(err, newRecipe) {
    if (err) {
      console.log(err);
    } else {
      newRecipe.author.id = req.user._id;
      newRecipe.author.username = req.user.username;
      newRecipe.save();
      console.log(newRecipe);
      res.redirect("/recipes"); 
    }
  });
});

// SHOW route
router.get("/:id", function(req, res) {
  Recipe.findById(req.params.id).populate("comments").exec(function(err, foundRecipe) {
       if (err) {
           console.log(err);
       } else {
          //console.log(foundRecipe);
          res.render("recipes/show", {recipe: foundRecipe});
       }
   });
});

// EDIT route
router.get("/:id/edit", checkRecipeOwnership,  function(req, res) {
  Recipe.findById(req.params.id, function(err, recipeFound) {
    res.render("recipes/edit", {recipe: recipeFound});
});
});

//UPDATE route
router.put("/:id", checkRecipeOwnership, function(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body.recipe, function(err, recipeUpdated) {
       if (err) {
           console.log(err);
       } else {
           res.redirect("/recipes/" + req.params.id);
       }
    });
});

// DELETE route 
router.delete("/:id", checkRecipeOwnership, function(req, res) {
  Recipe.findByIdAndRemove(req.params.id, function(err){
    if (err) {
      res.redirect("/recipes");
    } else {
      res.redirect("/recipes");
    }
  });
});

// middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

function checkRecipeOwnership(req, res, next) {
  // is user logged in?
  if (req.isAuthenticated()) {
    Recipe.findById(req.params.id, function(err, recipeFound) {
      if (err) {
          res.redirect("back");
      } else {
        // does user own the recipe?
        if (recipeFound.author.id.equals(req.user._id)) {
          next();
        } else {
          res.redirect("back");
        }
      }
   })
  } 
};

module.exports = router;