const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mesa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: 'mesas',
       key: 'id'
     }
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: 'clientes',
       key: 'id'
     }
    },
    status:{
      type: DataTypes.ENUM('aberto','fechado', 'cancelado'),
      allowNull: false
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
    
   }, {
    sequelize,
    tableName: 'pedidos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pedidos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
