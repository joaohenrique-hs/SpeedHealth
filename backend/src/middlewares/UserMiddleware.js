const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create() {
    const middleware = celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5),
        whatsapp: Joi.string().required().min(10).max(11),
        address: Joi.string().required(),
      }),
    });
    return (middleware);
  },

  session() {
    const middleware = celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5),
      }),
    });
    return (middleware);
  },
};
