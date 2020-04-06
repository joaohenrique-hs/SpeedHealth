const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    all(){
        const middleware = celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number()
            })
        })
        return (middleware)
    },

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
                cientific_name: Joi.string(),
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
                cientific_name: Joi.string(),
                price: Joi.number().required(),
                description: Joi.string().required(),
            })
        })
        return (middleware)
    },
}