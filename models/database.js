const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Studentdata', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Estab.') }
    else { console.log('Error in DB connection : ' + err) }
});


require('./student.model');