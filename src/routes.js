const { Router } = require("express");

const UserControllers = require("./controllers/UserControllers");
const FuncionariosControllers = require("./controllers/FuncionariosControllers");
const ClientesControllers = require("./controllers/ClientesControllers");
const CardapioControllers = require("./controllers/CardapioControllers");


const routes = Router();

routes.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});
//Controles de Usuarios
routes.post('/users', UserControllers.store);
routes.get('/user', UserControllers.index);
routes.get('/user/:id', UserControllers.show);
routes.put('/user/:id', UserControllers.update);
routes.delete('/user/:id', UserControllers.destroy);

//controle de funcionarios
routes.post('/funcionarios', FuncionariosControllers.store);
routes.get('/funcionarios', FuncionariosControllers.index);
routes.get('/funcionario/:id', FuncionariosControllers.show);
routes.put('/funcionario/:id', FuncionariosControllers.update);
routes.delete('/funcionario/:id', FuncionariosControllers.destroy);

//controle de clientes
routes.post('/clientes', ClientesControllers.store);
routes.get('/clientes', ClientesControllers.index);
routes.get('/clientes/:id', ClientesControllers.show);
routes.put('/clientes/:id', ClientesControllers.update);
routes.delete('/clientes/:id', ClientesControllers.destroy);

//controle do cardapio
routes.post('/cardapio', CardapioControllers.store);
routes.get('/cardapio', CardapioControllers.index);
routes.get('/cardapio/:id', CardapioControllers.show);
routes.put('/cardapio/:id', CardapioControllers.update);
routes.delete('/cardapio/:id', CardapioControllers.destroy);

module.exports = routes;
