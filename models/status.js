const mongoose = require('mongoose');
const schema = mongoose.Schema;

const statusSchema = new mongoose.Schema({
    title: { type: String, required: true },
    value: { type: String, required: true }
}, {versionKey: false});

module.exports = mongoose.model('Statuses', statusSchema);