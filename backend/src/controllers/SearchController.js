const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        console.log(request.query);
        //Buscar todos devs num raio 10km
        //Filtrar por tecnologias
        return response.json({ devs: [] });
    }
}