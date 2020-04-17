const connection = require('../database/connection');

module.exports = {
  async all(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('items').count();

    const items = await connection('items')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    response.header('X-Total-Count', count.count);

    return response.json(items);
  },

  async modify(request, response) {
    const { id } = request.params;
    const { title, price, description } = request.body;
    const pharmacyId = request.id;

    const items = await connection('items')
      .where('id', id)
      .select('pharmacyId')
      .first();

    if (items.pharmacyId !== pharmacyId) {
      return response.status(401).json({ error: 'Operation not permited.' });
    }

    await connection('items')
      .where('id', id)
      .update({ title, price, description }, 'title')
      .then(() => response.json({ title, price, description }))
      .catch(() => response.status(500).send());

    return response.status(200).send();
  },

  async delete(request, response) {
    const { id } = request.params;
    const pharmacyId = request.id;

    const items = await connection('items')
      .where('id', id)
      .select('pharmacyId')
      .first();

    if (items.pharmacyId !== pharmacyId) {
      return response.status(401).json({ error: 'Operation not permited.' });
    }

    await connection('items').where('id', id).delete();

    return response.status(204).send();
  },

  async index(request, response) {
    const pharmacyId = request.id;

    const items = await connection('items')
      .where('pharmacyId', pharmacyId)
      .select('*');

    return response.json(items);
  },

  async create(request, response) {
    const { title, price, description } = request.body;

    const pharmacyId = request.id;

    connection('items')
      .insert({
        title,
        price,
        description,
        pharmacyId,
      }, 'id')
      .then((id) => {
        const [itemId] = id;
        return response.json({ itemId });
      })
      .catch(() => response.status(500).send());
  },
};
