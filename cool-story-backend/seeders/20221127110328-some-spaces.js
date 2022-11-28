'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Home",
          description: "Sed et eleifend dolor, lacinia tincidunt libero. Pellentesque eu leo",
         
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          title: "Street",
          description: "Sed et eleifend dolor, lacinia tincidunt libero. Pellentesque eu leo",
         
          createdAt: new Date(),
          updatedAt: new Date(),
        
        }, 
        {
          title: "Park",
          description: "Sed et eleifend dolor, lacinia tincidunt libero. Pellentesque eu leo",
         
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        {
          title: "Bank",
          description: "Sed et eleifend dolor, lacinia tincidunt libero. Pellentesque eu leo",
         
          createdAt: new Date(),
          updatedAt: new Date(),
        
        }, 
        {
          title: "Town",
          description: "Sed et eleifend dolor, lacinia tincidunt libero. Pellentesque eu leo",
         
          createdAt: new Date(),
          updatedAt: new Date(),
        
        }, 
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("spaces", null, {});
  }
};
