'use strict';
const { faker } = require('@faker-js/faker');

const generateFakeUsers = () => {
  const userList = [];
  for (let i = 0; i < 1000; i++) {
    userList.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      emailName: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  return userList;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', generateFakeUsers());
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
