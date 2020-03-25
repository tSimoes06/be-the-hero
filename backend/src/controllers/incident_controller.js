const connection = require('../database/connections');

module.exports = {
    /**
     * Para acessar informacaoes de autenticacao que no caso seria o id da ong, isso aparece no 
     * cabecalho da pagina, como o idioma e etc e assim usa-se .headers
     */
    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id })
    },
    /**
     * Queremos utilizar um esquema de paginacao para nao mostrar todos
     * os casos de uma vez, queremos visualizar 5 de cada vez.
     */
    async index(request, response){

        const { page = 1 } = request.query;

        //o total de itens eh retornado pelo header da nossa resposta(melhor assim, mais organizado)
        const [count] = await connection('incidents').count(); 
        
        //abaixo eh um esquema de paginacao
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page -1) * 5)// pegando de 5 em 5
            .select([
                'incidents.*', 
                'ongs.name',
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);
        response.header('X-Total-Count', count['count(*)'])//vi no console log que retornou esta prop 'count(*)'
            
        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id',id)
            .select('ong_id')
            .first();
        if (incident.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted.'});
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send()//deu sucesso mas sem conteudo e send eh para enviar sem corpo
    }
}