module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) { // this asks are you authenticaticated, if not do something else. 
      return next();
    } else {
      res.redirect("/"); // this is the do something else portion
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};
