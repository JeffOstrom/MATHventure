const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

//establish User schema rules
userSchema = new Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 60},
	username: { type: String, required: true, unique: true, minlength: 6, maxlength: 45},
	password: { type: String, required: true, minlength: 6, maxlength: 100},
	phone: { type: Number, required: false, minlength: 10, maxlength: 10},
	addProgress: { type: Number, required: true, default: 1},
	subProgress: { type: Number, required: true, default: 1},
	mulProgress: { type: Number, required: true, default: 1},
	divProgress: { type: Number, required: true, default: 1},
	userScore: { type: Number, required: true, default: 0}
});

//compile the model as User
const User = mongoose.model('User', userSchema);

//encrypt the password before saving it to the database
userSchema.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

//export the schema to be accessed in other files
module.exports = User;