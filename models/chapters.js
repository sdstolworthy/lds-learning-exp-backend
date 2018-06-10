/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chapters', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    chapter_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'chapters',
    timestamps: false
  });
};
