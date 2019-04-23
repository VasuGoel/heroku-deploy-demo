const express = require('express'),
      app = express();
      
      
// app config
app.set('view engine', 'ejs');
app.use(express.static('public'));


// routes
app.get('/', (req, res) => {
    res.redirect("/portfolio");
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});


// start UNIX socket to listen for connections
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server has started...");
})