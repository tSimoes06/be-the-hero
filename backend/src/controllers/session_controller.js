/**
 * Dedicado ao login de uma ong, eh apenas ver se existe no banco o cadastro daquela ong ou nao
 */
const connection = require('../database/connections');

module.exports = {
    async create(request, response) {
        
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id',id)
            .select('name')
            .first();//me retorna o primeiro
        
        if (!ong) {
            return response.status(400).json({
                error: 'No ONG found with this ID'
            })
        }
        
        return response.json(ong);
    }
}