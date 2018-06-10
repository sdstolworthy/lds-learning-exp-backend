/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    volume_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'volumes',
        key: 'id'
      }
    },
    book_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    book_long_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    book_subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    book_short_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    book_lds_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'books',
    timestamps: false
  });
};
