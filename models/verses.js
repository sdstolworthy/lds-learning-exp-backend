/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('verses', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'chapters',
        key: 'id'
      }
    },
    verse_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scripture_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'verses',
    timestamps: false
  });
};
