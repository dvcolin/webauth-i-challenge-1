
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      // ID
      tbl.increments();

      // USERNAME
      tbl.string('username', 255).unique().notNullable();

      // PASSWORD
      tbl.string('password', 255).notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
};
