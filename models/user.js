const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validate = require('mongoose-validator-all');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


//multivalidation rule object for name and username
const rules = {
	name: validate.multiValidate([
		{
			validator: 'isLength',
			arguments: [3, 60],
			message: 'Name should be between 3 and 60 characters in length.'
		}, {
			validator: 'isAlpha',
			message: 'Name should contain alphabetical characters only.'
		}
	]),
	username: validate.multiValidate({
		{
			validator: 'isLength',
			arguments: [6, 45],
			message: 'Username should be between 3 and 60 characters in length.'
		}, {
			validator: 'isAlphanumeric',
			message: 'Username should only contain alphanumeric characters.'
		}
	}),
	password: validate.multiValidate({
		{
			validator: 'isLength',
			arguments: [6, 100],
			message: "Password should be between 3 and 100 characters in length."
		}
	}),
	phone: validate.multiValidate({
		{
			validator: 'isLength',
			arguments: [10, 10]
			message: 'Phone number should be 10 characters in length.'
		}
	})
};

//establish User schema rules
userSchema = new Schema({
	name: { type: String, required: true, validate: rules.name},
	username: { type: String, required: true, unique: true, validate: rules.usernmae},
	password: { type: String, required: true, validate: rules.password},
	phone: { type: Number, required: false, validate: rules.phone},
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