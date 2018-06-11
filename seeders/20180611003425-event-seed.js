'use strict';
var faker = require('faker')
var moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      ...Array(80).fill(null).map(() => {
        const date = faker.date.between(moment(), moment().add(3, 'month'))
        const dates = [moment(date).toDate(), moment(date).add(2, 'hour').toDate()]
        return {
          end: dates[1],
          start: dates[0],
          title: faker.name.title(),
          createdAt: new Date,
          updatedAt: new Date,
        }
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {})
  }
};
