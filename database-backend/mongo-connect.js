const mongoose = require('mongoose');

// Deprecations --------
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://HarshAjudia:YzhJfWK3y8,$zGL@cluster0-xzugn.mongodb.net/faqCollection?retryWrites=true&w=majority")
    .then( () => {
        console.log("Mongo DB connected!");
    })
    .catch( () => {
        console.log("Could not connect to Mongo DB");
    });
