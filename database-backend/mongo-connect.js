const mongoose = require('mongoose');

// Deprecations --------
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
// mongodb+srv://<username>:<password>@cluster0-xzugn.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://user_read_write:XnTLUvmiDV88xTOB@cluster0-xzugn.mongodb.net/faqCollection?retryWrites=true&w=majority")
    .then( () => {
        console.log("Mongo DB connected!");
    })
    .catch( () => {
        console.log("Could not connect to Mongo DB");
    });
