const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);/** Cria-se a conexao */

module.exports = connection;
/** 
 * Exportando a conexao com o banco de dados, tenho que importar esse arquivo
 * nos arquivos que eu preciso me comunicar com o bd.
 */ 