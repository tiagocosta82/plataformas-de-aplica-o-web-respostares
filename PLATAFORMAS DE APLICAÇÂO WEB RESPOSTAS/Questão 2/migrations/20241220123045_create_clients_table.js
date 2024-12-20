exports.up = function(knex) {
    return knex.schema.createTable('clients', function(table) {
      table.increments('id');
      table.string('email').notNullable(); 
      table.string('password').notNullable(); 
      table.string('name').notNullable(); 
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('clients'); 
  };
  