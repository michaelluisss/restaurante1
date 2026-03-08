const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mesas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('livre','ocupada','fechando'),
      defaultValue:'livre',
      allowNull: false
    } 
  }, {
    sequelize,
    tableName: 'mesas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "mesas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
//