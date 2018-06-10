/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('updates', {
    scripture_text: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'updates'
  });
};
