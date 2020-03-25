const express = require('express');

const ong_controller = require('./controllers/ong_controller');
const incident_controller = require('./controllers/incident_controller');
const profile_controller = require ('./controllers/profile_controller');
const session_controller = require ('./controllers/session_controller');

const routes = express.Router();

routes.post('/sessions', session_controller.create)//login, queeo criar uma secao

routes.get('/ongs', ong_controller.index);
routes.post('/ongs',ong_controller.create);  /* endereco da rota , funcao como segundo parametro */

routes.get('/profile', profile_controller.index);

routes.get('/incidents',incident_controller.index);
routes.post('/incidents',incident_controller.create);

routes.delete('/incidents/:id', incident_controller.delete)//recebe um route param com o id do incidente que quero deletar

module.exports = routes; /* dessa forma que exporta uma variavel no node */