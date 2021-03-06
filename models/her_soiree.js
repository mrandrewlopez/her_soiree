const knex = require('../database');

const index = () =>
  knex('her_soiree')
    .then(rows => rows)
    .catch(error => {console.error(error); });

const show = id =>
  knex('her_soiree')
    .where('id', id)
    .then(rows => rows[0])
    .catch(error =>{console.error(error); });

const create = (data) =>
  knex('her_soiree')
  .returning('*')
  .insert(data)
  .then(rows => rows[0])
  .catch(error =>{console.error(error); });

const update = (id, data) =>
  knex('her_soiree')
    .returning('*')
    .where('id', id)
    .update({...data, updated_at: knex.fn.now()})
    .then(rows => rows[0])
    .catch(error =>{console.error(error); });

const destroy = id =>
  knex('her_soiree')
    .returning('*')
    .where('id', id)
    .del()
    .then(rows => rows[0])
    .catch(error =>{console.error(error); });



module.exports ={
  index,
  show,
  create,
  update,
  destroy
}
