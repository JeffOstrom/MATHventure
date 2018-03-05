const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating new model for user
// however, going to start off with required being false
const userSchema = new Schema({
	name: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	parentEmail: { type: Boolean, required: false },
	addProgress: { type: Number, required: true, default: 1 },
	subProgress: { type: Number, required: true, default: 1 },
	mulProgress: { type: Number, required: true, default: 1 },
	divProgress: { type: Number, required: true, default: 1 }
});

const User = mongoose.model("User", userSchema);

module.exports = User;