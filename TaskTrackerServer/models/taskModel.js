
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tasksSchema = new Schema({
    description: {type:String},
    status: {type:String}
});


module.exports = mongoose.model('Tasks',tasksSchema);