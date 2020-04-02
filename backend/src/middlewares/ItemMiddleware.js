const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    delete() {
        const middleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                token: Joi.string().required()
            }).unknown(),
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            }),
        })
        return (middleware)
    },

    modify() {
        const middleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                token: Joi.string().required()
            }).unknown(),
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            }),
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                price: Joi.number().required(),
                description: Joi.string().required(),
            })
        })
        return (middleware)
    },

    index() {
        const middleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                token: Joi.string().required()
            }).unknown(),
        })
        return (middleware)
    },

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