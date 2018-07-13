// ===============
//   AUTH ROUTES
// ===============

var Recipe   = require("../models/recipe"),
    User     = require("../models/user"),
    Comment  = require("../models/comment"),
    passport = require("passport"),
    express = require("express");
    router  = express.Router();

router.get("/", function(req, res) {
    res.redirect("/recipes");
});

//REGISTER
//########

// Show register form
router.get("/register", function(req, res) {
  res.render("register");
});

//Handle sign up logic
router.post("/register", function(req, res) {
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user) {
    if(err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/recipes");
    });
  });
});


//LOGIN
//#####

// Show login form
router.get("/login", function(req, res) {
  res.render("login");
});

// Handle login logic
// router.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local", 
  {
    successRedirect: "/recipes",
    failureRedirect: "/login"
  }), function(req, res) {
});


//LOGOUT
//######

// Handle logout logic
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/recipes");
})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
