const Joi = require('@hapi/joi');

const logInValidation = data => {
    const schema = {
        email: Joi.string()
        .min(6)
        .email()
        .required(),

        password: Joi.string()
        .min(6)
        .required()
    };
    return Joi.validate(data, schema);

}
module.exports.logInValidation = logInValidation; 