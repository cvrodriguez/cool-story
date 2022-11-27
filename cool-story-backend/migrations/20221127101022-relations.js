'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "spaces", "userId",{
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
     ),

     await queryInterface.addColumn(
      "stories", "spaceId",{
        type: Sequelize.INTEGER,
        references: {
          model: "spaces",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
     )
 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
