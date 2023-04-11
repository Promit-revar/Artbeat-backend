const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feedbackSchema = new Schema({
    feedback: String
});
const feedback = mongoose.model('feedback', feedbackSchema);
module.exports = feedback;