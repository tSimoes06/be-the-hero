
exports.up = function(knex) { /*o que preciso que seja feito */
    return knex.schema.createTable('incidents', function(table) {
      table.increments();/**primary key, eh o id */
      
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      
      table.string('ong_id').notNullable(); /** uma coluna que armazena a ong que criou o incidente */

      table.foreign('ong_id').references('id').inTable('ongs') /**cria a chave estrangeira */
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
