const mongoose = require('mongoose');
const data = mongoose.model('data');

exports.getMainPage = (req, res)=> {
    data.find((error, dataList) => {
        if(!error){
            res.render('main.ejs', {dataItems: dataList});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};