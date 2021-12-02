const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		unique: true,
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
	},
	mobile_number: {
		type: String,
		validate(value) {
				if (!validator.isMobilePhone(value)) {
						throw new Error('user must provide a valid phone number');
				}
		}
},
admission_date: {
	type: String,
	validate(value) {
			if (!validator.isDate(value)) {
					throw new Error('user must provide a valid date. e.g. [2021-07-15]');
			}
	}

},
});

UserSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });
	if(!user){
		throw new Error('unable to login')
	}
	const isMatch = await bcrypt.compare(password, user.password)
	if(!isMatch){
		throw new Error('wrong password')
	}
	return user;
};

UserSchema.pre('save',async function(next){
  const user = this;
	console.log(validator.isMobilePhone('ss'));
	console.log('just before saving');
	if(user.isModified('password')){
		user.password = await bcrypt.hash(user.password, 8)
	}
	next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
