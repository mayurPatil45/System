const mongoose = require('mongoose');

const URI = "mongodb+srv://patilmayur2745:lUf9v7vP4wtrvZt8@cluster0.lpdssk0.mongodb.net/system?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to mongodb')
})

module.exports = mongoose
