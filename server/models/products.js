'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {

    static associate(models) {
      Products.belongsTo(Type)
      Products.belongsTo((Brand))
      Products.hasMany(Product_info, { as: 'info' })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    img: DataTypes.STRING,
    brandId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return Products;
};