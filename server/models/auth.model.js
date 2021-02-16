const mongoose = require('mongoose');
const AuthSchema = new mongoose.Schema({
    name: {    
        type:String,
        required:[true, "Auhor must htave a name!"],
        minlength: [3, "Name must be at least 3  characters!"],
        maxlength: [20, "Name must be less than 20 characters!"]
    },
}, { timestamps: true });
module.exports.Auth = mongoose.model('Auth', AuthSchema);