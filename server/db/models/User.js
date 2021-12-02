const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('must provide a valid email');
			}
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
		validate(value) {
			if (!validator.isStrongPassword(value)) {
				throw new Error('password must be stronger, password must be 8 characters with at least one uppercase, 1 number,1 symbol')
			}
			if (value.toLowerCase().includes('password')) {
				throw new Error('password is not a valid password')
			}
		},
	}
}
);

UserSchema.pre('save',async function(next){
  const user = this;
	console.log('just before saving');
	next();
})
const User = mongoose.model('User', UserSchema);

module.exports = User;
