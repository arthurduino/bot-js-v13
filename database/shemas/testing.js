var mongoose = require('mongoose');
var schema = mongoose.Schema({
    message : {type:String , required:true}
})
module.exports = mongoose.model('testing', schema);