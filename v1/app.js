var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [{
        name: "Salmon Creek",
        image: "https://farm5.staticflickr.com/4113/5193321637_f6cd908e17.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=7de12efa9efd5d176511b6caf1c99e5a"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=3d53e43dfa238b4ebce44df34d893228"
    },
    {
         name: "Salmon Creek",
         image: "https://farm5.staticflickr.com/4113/5193321637_f6cd908e17.jpg"
    },
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=7de12efa9efd5d176511b6caf1c99e5a"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://images.unsplash.com/photo-1437382944886-45a9f73d4158?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=3d53e43dfa238b4ebce44df34d893228"
    }
]

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("partials"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds})
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image}

    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(3000, process.env.IP, function() {
    console.log("The YelpCamp Server has started");
});