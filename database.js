const mongoose = require('mongoose');
const uri ='mongodb+srv://Promit_revar:promit@cluster0.nfnlcqf.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to database');
    }
);
module.exports = db;