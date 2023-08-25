'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {

    static associate(models) {
      ProductItems.belongsTo(Type)
      ProductItems.belongsTo((Brand))
      ProductItems.hasMany(Product_info, { as: 'info' })
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