const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  all() {
    const middleware = celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    });
    return (middleware);
  },

  login() {
    const middleware = celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5),
      }),
    });
    return (middleware);
  },

  create() {
    const middleware = celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5),
        cnpj: Joi.string().required().length(14),
        whatsapp: Joi.string().required().min(10).max(11),
        description: Joi.string(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    });
    return (middleware);
  },
};
