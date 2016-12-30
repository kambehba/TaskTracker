
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tasksSchema = new Schema({
    id:String,
    description: String,
    status: String
});


module.exports = mongoose.model('Tasks',tasksSchema);; 