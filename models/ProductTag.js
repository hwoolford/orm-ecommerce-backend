// Imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Imports the database connection from config.js
const sequelize = require('../config/connection');

// Initializes ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// Fields and rules for ProductTag model
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
     },
     product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
     },
     tag_id: {
      type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
        },
     },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
