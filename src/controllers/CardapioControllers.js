const {cardapio} = require("../models/")
class CardapioControllers{
  async store(req,res) {
    try {
           const { nome, idade,uf } = req.body;

        if (!nome || !idade || !uf ) {
           return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
        }

        const funcionarioAlreadyExists = await cardapio.findOne({ 
            where: {  nome,idade }
        });

        if (funcionarioAlreadyExists) {
            return res.status(400).json({ message: "Esse cardapio já existe!" });
        }

        const createdFuncionario = await cardapio.create({ nome, idade,uf });
        
        return res.status(200).json(createdFuncionario);      
    } catch (error) {
        return res.status(400).json({ message: "Erro ao tentar adicionar no cardapio!" });
      
    }
  }

  async index(req, res) {
    try {
      const cardapio= await cardapio.findAll()
      return res.status(200).json(cardapio)

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao listar os dados." });
    }
  }

  async show(req, res) {
    try {
      const {id} = req.params;
      const cardapio = await cardapio.findByPk(id)
      if(!cardapio){
            return res.status(404).json({ message: "Cardapio não encontrado!"});
        }
        return res.status(200).json(cardapio);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao buscar o dado específico." });
    }
  }

  async update(req, res) {
    try {
      const {id} = req.params;
      const {nome,idade,uf} = req.body;
      await cardapio.update(
          {nome,idade,uf},
          {where:{
              id:id
          }}
      );
      return res.status(200).json({message : "Cardapio atualizado!"})

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar os dados." });
    }
  }

  async destroy(req, res) {
    try {
        const {id} = req.params;
        await cardapio.destroy(
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

module.exports = new CardapioControllers();