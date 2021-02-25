const mongoose = require('mongoose');
const db = mongoose.model('data');

exports.getAdminPage = (req, res)=> {
    db.find((error, dataList) => {
        if(!error){
            res.render('admin.ejs', {dataItems: dataList});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};
exports.postData = (req, res) => {
    let items = new db(req.body.newName, req.body.newDofb,
        req.body.newResidence, req.body.newEducation, 
        req.body.newTechskills, req.body.newSoftskills);
    let newItems = new db();
    newItems.items = items;

    newItems.save((error, response) => {
        if(!error){
            res.redirect('/admin');
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.deleteData = (req, res) => {
    res.redirect('/admin');
};