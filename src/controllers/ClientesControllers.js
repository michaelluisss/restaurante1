const {clientes} = require("../models/")
class ClientesControllers{
  async index(req, res) {
    try {

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao listar os dados." });
    }
  }

  async show(req, res) {
    try {

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar o dado específico." });
    }
  }

  async update(req, res) {
    try {
      const {id} = req.params;
      const {nome,idade,uf} = req.body;
      await clientes.update(
          {nome,idade,uf},
          {where:{
              id:id
          }}
      );
      return res.status(200).json({message : "Cliente atualizado!"})

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar os dados." });
    }
  }

  async destroy(req, res) {
    try {
        const {id} = req.params;
        await clientes.destroy(
            {where:{
                id:id
            }}
        );

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao deletar o dado." });
    }
  }
}

module.exports = new ClientesControllers();