var Joi = require('joi');

module.exports = {

	create: Joi.object().keys({

		text: Joi.string().max(140).required(),
		user_id: Joi.string().required()
	})
}