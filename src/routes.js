const { Router } = require("express");

const UserControllers = require("./controllers/UserControllers");
const FuncionariosControllers = require("./controllers/FuncionariosControllers");

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

//controle do cardapio

module.exports = routes;
