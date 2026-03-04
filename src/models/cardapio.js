const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cardapio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    detalhes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cardapio',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cardapio_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
