const mongoose = require('mongoose');
const db = mongoose.model('data');
const ObjectId = require('mongodb').ObjectID;

exports.getAdminPage = (req, res)=> {
    db.find((error, dataList) => {
        if(!error){
            res.render('admin.ejs', {dataItems: dataList});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};
/*
exports.postData = (req, res) => {
    let newItem = new db();
    newItem.name = req.body.newName;
    newItem.dateofbirth = req.body.newDofb;
    newItem.residence = req.body.newResidence;
    newItem.education = req.body.newEducation;
    newItem.technicalskills = req.body.newTechskills;
    newItem.softskills = req.body.newSoftskills;

    newItem.save((error, response) => {
        if(!error){
            res.redirect('/admin');
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};
*/

// Paigalda suvaline animatsioon ja saa update korda
exports.updateData = (req, res) => {
    db.collection.updateOne({ _id: ObjectId("603ccd244c389d5e30c38477")}, 
    { $set: {_id: ObjectId("603ccd244c389d5e30c38477"),
    'name': `${req.body.newName}`,
    'dateofbirth': `${req.body.newDofb}`,
    'residence': `${req.body.newResidence}`,
    'education': `${req.body.newEducation}`,
    'technicalskills': `${req.body.newTechskills}`,
    'softskills': `${req.body.newSoftskills}`}},
    { upsert: true });
    res.redirect('/');
}

/*
exports.deleteData = (req, res) => {
    console.log('call from delete' + req.body.hidden);
    res.redirect('/admin');
};
*/

/* EJS for Admin.ejs
<div class="box">
<% for(let i = 0; i < dataItems.length; i++) { %>
    <table>
        <tr>
            <td><%= dataItems[i].name %></td>
            <td><%= dataItems[i].dateofbirth %></td>
            <td><%= dataItems[i].residence %></td>
            <td><%= dataItems[i].education %></td>
            <td><%= dataItems[i].technicalskills %></td>
            <td><%= dataItems[i].softskills %></td>
            <form action="/delete" method="POST">
                <input type="hidden" value="<%= dataItems[i] %>" name="hidden">
                <button type="submit">Remove</button> 
             </form> 
            </td>
        </tr>
    </table>
    <% } %>
</div>
*/