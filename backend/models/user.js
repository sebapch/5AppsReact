const {mongoose} = require("mongoose");
const {Jwt} = require("jsonwebtoken");
const {Joi} = require("joi");
const {JoiPasswordComplexity} = require("joi-password-complexity");


const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},

});

userSchema.method.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
    return token

}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        email: Joi.string().required().label("email"),
        password: JoiPasswordComplexity.required().label("password"),
    });
    return schema.validate(data)
};

module.exports = {User, validate}; 