module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'email',
    {
      type: Sequelize.STRING,
      defaultValue: null,
      allowNull: true,
    },
  ),

  down: async (queryInterface) => queryInterface.removeColumn('users', 'email'),
};
