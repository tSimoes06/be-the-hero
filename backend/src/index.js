const express = require('express'); /* Importando as funcionalidades do express */
const cors = require('cors');
const routes = require('./routes');

const app = express(); /* Instanciei a minha aplicacao */

/* Precisa informar para o app que utilizaremos json para o corpo das requisicoes, antes das requisicoes converter tudo para json*/
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/recursos --> '/users'
*/

/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma unformacao no back-end
 * DELETE: Deletar uma informacao no back-end
 * 
 * request ele guarda todos os dados que vem da requisicao
 * e o response eh responsavel que retorna uma resposta ao usuario
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: tables('users').select('*').where()
  */

app.listen(3333);/* Pedi para minha aplicacao ouvir a porta 3333 (acessando localhost:3333)*/