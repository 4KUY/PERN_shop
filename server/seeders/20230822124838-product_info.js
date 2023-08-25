'use strict';

const productInfo = require('../mokData/productInfo.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_infos', 
    productInfo.map((item) => {
      return {
        title:item.title ,
        description:item.description,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        productId:item.deviceId
      }
    
    })
  , {});
  },

  async down (queryInterface, Sequelize) {
     
    await queryInterface.bulkDelete('product_infos', null, {});
     
  }
};
