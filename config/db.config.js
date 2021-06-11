const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://taskapp:physics123physics@cluster0.fnugi.mongodb.net/Url-Shortener';

mongoose.connect(DB_URI ,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;

module.exports = connection;