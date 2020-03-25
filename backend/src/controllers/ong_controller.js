/**
 * Dedicado aa funcoes das rotas para melhorar a escabilidade da 
 * aplicacao, antes ficafa tudo dentro de routes.js utilizando funcoes anonimas
 */
const crypto = require('crypto');/**importando um modulo de encriptacao */
const connection = require('../database/connections')

module.exports = {
	//para criar o cadastro de uma ong
  async create(request, response){
    const {name, email, whatsapp, city, uf } =  request.body;

    const id = crypto.randomBytes(4).toString('HEX');//minha id criptografada

    await connection('ongs').insert({ 
      id,
      name,
      email,
      whatsapp,
      city,
      uf,	
    })
	  /**
	  * insert pode demorar, so posso usar o metodo response depois que finalizar o insert.
	  * Desse modo, define a funcao como assincrona e usar await para esperar o insert acabar para 
	  * depois passar para response.json().
	  */
	 	return response.json({ id });//usr vai precisar do id para acessar a aplicacao
	},
	//para listar todas as ongs cadastradas
	async index (request, response){
		
		const ongs = await connection('ongs').select('*');

    return response.json(ongs);
	}

};