/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pilcrow', {
    verse_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'pilcrow'
  });
};
