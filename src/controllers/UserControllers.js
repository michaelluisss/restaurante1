const { User } = require("../models/");

class UserController {
    async store(req, res) {
      try {
          const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "O nome e o email são obrigatórios!" });
        }

        const userAlreadyExists = await User.findOne({ 
            where: { email: email }
        });

        if (userAlreadyExists) {
            return res.status(400).json({ message: "Esse usuário já existe!" });
        }

        const createdUser = await User.create({ name, email });
        
        return res.status(201).json(createdUser); 
      } catch (error) {
        return res.status(400).json({ message: "Erro ao tentar criar usuario!" });
      }
        }
    async index(req,res){
        try {
            
        const users = await User.findAll()
        return res.status(200).json(users)
        } catch (error) {
         return res.status(400).json({ message: "Erro ao tentar listar usuarios!" });

        }
    }
    async show(req,res){
        try {

        const { id } = req.params;
        const user = await User.findByPk(id);
        if(!user){
            return res.status(404).json({ message: "Usuario não encontrado!"})
        }
        return res.status(200).json(user)            
        } catch (error) {
           return res.status(400).json({ message: "Erro ao tentar encontrar usuario!" });

        }
    }
    async update(req,res){
        try {
            const {id} = req.params;
            const {name,email} = req.body;
            await User.update(
                {name,email},
                {where:{
                    id:id
                }}
            );
            return res.status(200).json({message : "Usuario atualizado!"})
            
        } catch (error) {
            return res.status(400).json({ message: "Erro ao tentar atualizar usuario!" });

        }
    }
    async destroy(req,res){
        try {
            const {id} = req.params;
            await User.destroy(
                {where:{
                    id:id
                }}
            );
            return res.status(200).json({message : "Usuario excluido com sucesso!"})
            
        } catch (error) {
            return res.status(400).json({ message: "Erro ao tentar excluido usuario!" });

        }
    }
}


module.exports = new UserController();