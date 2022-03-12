var mongoose = require('mongoose');
var schema = mongoose.Schema({
    server : {type:String , required:true},
    module: {type:String, required:true },
    key: {type:String, required:true},
    value: {type:String, required: true}
})
module.exports = mongoose.model('config', schema, 'Configuration');