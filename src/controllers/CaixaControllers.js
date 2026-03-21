const { caixa: Caixa } = require("../models")

class CaixaControllers {
  async store(req, res) {
    try {
      const { funcionario_id, saldo_inicial, saldo_final, data_abertura, data_fechamento, status } = req.body;

      if (!funcionario_id || !saldo_inicial || !data_abertura || status === undefined) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
      }

      const caixaAlreadyExists = await Caixa.findOne({
        where: {id}
      });

      if (caixaAlreadyExists) {
        return res.status(400).json({ message: "Esse  caixa já existe!" });
      }

      const createdItem = await Caixa.create({ funcionario_id, saldo_inicial, saldo_final, data_abertura, data_fechamento, status });
      return res.status(201).json(createdItem);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao tentar adicionar o dado no caixa!" });
    }
  }

  async index(req, res) {
    try {
      const itens = await Caixa.findAll();
      return res.status(200).json(itens);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao listar os dados." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const dado = await Caixa.findByPk(id);

      if (!dado) {
        return res.status(404).json({ message: "Item não encontrado!" });
      }

      return res.status(200).json(dado);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar o dado específico." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { saldo_final, data_fechamento, status } = req.body;

      const dado = await Caixa.findByPk(id);
      if (!dado) {
        return res.status(404).json({ message: "Caixa não encontrado!" });
      }

      await Caixa.update(
        { saldo_final, data_fechamento, status },
        { where: { id } }
      );

      return res.status(200).json({ message: "Caixa atualizado!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar os dados." });
    }
  }
}

module.exports = new CaixaControllers();