const express = require('express'),
      app = express();
      
      
// App config
app.set('view engine', 'ejs');


// Routes
app.get('/', (req, res) => {
    res.redirect("/portfolio");
});