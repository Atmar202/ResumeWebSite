const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dataDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./data');