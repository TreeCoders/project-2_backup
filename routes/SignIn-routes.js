  //******************************************************************************************************** */
  //******************************************************************************************************** */

                      //Google OAuth 

  //******************************************************************************************************** */
  //******************************************************************************************************** */
  var googleUser = require("../models/googleUser");
  module.exports = function(app, passport){
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { successRedirect: '/profile',
                                      failureRedirect: '/' }));


app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
})


app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', { googleUser: req.googleUser });
});

app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', { googleUser: req.googleUser });
});

function isLoggedIn(req, res, next) {
if(req.isAuthenticated()){
  return next();
}

res.redirect('/login');
}

  };