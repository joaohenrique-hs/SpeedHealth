const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    create() {
        const middleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                token: Joi.string().required()
            }).unknown(),
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                price: Joi.number().required(),
                description: Joi.string().required(),
            })
        })
        return (middleware)
    },
}