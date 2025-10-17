const express = require('express');
const routes = express.Router();

const ProfessorController = require('./controllers/professor');
const TurmasController = require('./controllers/turma');
const AtividadesController = require('./controllers/atividade');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Escola' });
});

routes.get("/professores", ProfessorController.getProfessores);
routes.get("/professores/:id", ProfessorController.getProfessorById);
routes.post("/professores", ProfessorController.createProfessor);
routes.patch("/professores/:id", ProfessorController.updateProfessor);
routes.delete("/professores/:id", ProfessorController.deleteProfessor);
routes.post("/professores/login", ProfessorController.loginProfessor);

routes.get("/turmas", TurmasController.getTurmas);
routes.get("/turmas/:id", TurmasController.getTurmaById);
routes.post("/turmas", TurmasController.createTurma);
routes.patch("/turmas/:id", TurmasController.updateTurma);
routes.delete("/turmas/:id", TurmasController.deleteTurma);
routes.get("/turmas/professor/:id", TurmasController.getTurmaByProfessor);

routes.get("/atividades", AtividadesController.getAtividades);
routes.get("/atividades/turma/:id", AtividadesController.getAtividadesByTurma);
routes.post("/atividades", AtividadesController.createAtividade);
routes.patch("/atividades/:id", AtividadesController.updateAtividade);
routes.delete("/atividades/:id", AtividadesController.deleteAtividade);

module.exports = routes;
