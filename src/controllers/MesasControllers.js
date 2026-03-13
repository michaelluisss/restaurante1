const { mesa: Mesas } = require("../models/")

class MesasControllers {
  async store(req, res) {
    try {
      const { numero,status} = req.body;

      if (!numero || status === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
      }

      const mesaInUse = await Mesas.findOne({
        where: { numero, status }
      });

      if (mesaInUse) {
        return res.status(400).json({ message: "Essa mesa ja está em uso!" });
      }

      const createdMesa = await Mesas.create({ numero,status});
      return res.status(201).json(createdMesa);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao tentar adicionar a mesa!" });
    }
  }

  async index(req, res) {
    try {
      const itens = await Mesas.findAll();
      return res.status(200).json(itens);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao listar os dados." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const item = await Mesas.findByPk(id);

      if (!item) {
        return res.status(404).json({ message: "Mesa não encontrado!" });
      }

      return res.status(200).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar o dado específico." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { numero,status} = req.body;

      const item = await Mesas.findByPk(id);
      if (!item) {
        return res.status(404).json({ message: "Mesa não encontrado!" });
      }

      await Mesas.update(
        { numero,status},
        { where: { id } }
      );

      return res.status(200).json({ message: "Mesas atualizado!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar os dados." });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const item = await Mesas.findByPk(id);
      if (!item) {
        return res.status(404).json({ message: "Mesa não encontrado!" });
      }

      await Mesas.destroy({ where: { id } });
      return res.status(200).json({ message: "Mesa deletado!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao deletar o dado." });
    }
  }
}

module.exports = new MesasControllers();