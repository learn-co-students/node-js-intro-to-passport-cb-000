
exports.up = (knex, Promise) => knex.schema.table('users', tbl => 
  tbl.string('password', 128));

exports.down = (knex, Promise) => knex.schema.table('users', tbl =>
  tbl.dropColumn('password'));
