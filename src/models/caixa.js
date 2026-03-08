const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caixa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    funcionario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: 'funcionarios',
       key: 'id'
     }
    },
    saldo_inicial: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    saldo_final: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    data_abertura:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull:false
    },
    data_fechamento:{
      type: DataTypes.DATE,
      allowNull:true
    },
    status:{
      type: DataTypes.ENUM('aberto','fechado'),
      allowNull: false
    }
   }, {
    sequelize,
    tableName: 'caixa',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "caixa_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
