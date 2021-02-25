const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: { type: String },
    dateofbirth: { type: String },
    residence: { type: String },
    education: { type: String },
    technicalskills: { type: String },
    softskills: { type: String }
});

module.exports = mongoose.model('data', dataSchema);