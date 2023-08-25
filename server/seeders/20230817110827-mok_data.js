'use strict';
const deviceData = require('../mokData/devices.json');
const typesData = require('../mokData/types.json');
const brandData = require('../mokData/brands.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('types', 
        typesData.map((item) => {
          return {
            name:item.name ,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt
          }
        
        })
      , {});
      await queryInterface.bulkInsert('brands', 
      brandData.map((item) => {
        return {
          name:item.name ,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        }
      
      })
    , {});
    await queryInterface.bulkInsert('products', 
    deviceData.map((item) => {
          return {
            name:item.name ,
            price:item.price,
            rating:item.rating,
            img:item.img,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            typeId:item.typeId,
            brandId:item.brandId
          }
        
        })
      , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.bulkDelete('types', null, {});
    await queryInterface.bulkDelete('brands', null, {});
  }
};
