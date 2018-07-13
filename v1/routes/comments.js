var express = require("express"),
    router  = express.Router({mergeParams: true}),
    Recipe = require("../models/recipe"),
    User = require("../models/user"),
    Comment = require("../models/comment");

//NEW route (displays the form)
router.get("/new", isLoggedIn, function(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", {recipe: recipe});
    }
  });
});

// CREATE route  
router.post("/", isLoggedIn, function(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    if (err) {
      console.log(err);
    } else {
      Comment.create(req.body.comment, function(err, newComment) {
          if (err) {
            console.log(err);
            //res.redirect("/recipes/:id/comments/new");
          } else {
            // add username and id to comment
            newComment.author.id = req.user._id;
            newComment.author.username = req.user.username;
            //save comment
            newComment.save();
            recipe.comments.push(newComment);
            recipe.save();
            res.redirect("/recipes/" + req.params.id);
          }
        });
    }
  });
});

// EDIT route
router.get("/:comment_id/edit", function(req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
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
router.put("/:comment_id", function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/recipes/" + req.params.id);
      }
  });
});

//DELETE route
router.delete("/:comment_id", function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, req.body.comment, function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/recipes/" + req.params.id);
    }
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}


module.exports = router;
