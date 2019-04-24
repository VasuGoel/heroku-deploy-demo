const express = require('express'),
      app = express();
      
      
// app config
app.set('view engine', 'ejs');
app.use(express.static('public'));


// routes
app.get('/', (req, res) => {
    res.redirect("/image-gallery");
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/image-gallery', (req, res) => {
    res.render('image-gallery'); 
});

// start UNIX socket to listen for connections
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server has started...");
})