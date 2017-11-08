var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    { 
        name: "Cloud's Rest", 
        image: "http://underonebotswanasky.com/cms/camps/1395233342/images/homeslider3.jpg",
        description: "blah blah blah"
    },
    {
        name: "Green Life",
        image: "https://s-ec.bstatic.com/images/hotel/max1024x768/934/93494507.jpg",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://q-ec.bstatic.com/images/hotel/max1024x768/934/93482339.jpg",
        description: "blah blah blah"
    }
]

    function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        //add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Added a campgrounds!");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place was great, but I wish there was internet",
                            author: "Homer"
                         }, function(err, comment) {
                        if(err){
                            console.log(err);
                        }
                        else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });
    
}
module.exports = seedDB;