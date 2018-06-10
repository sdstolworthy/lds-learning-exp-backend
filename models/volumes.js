/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('volumes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    volume_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    volume_long_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    volume_subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    volume_short_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    volume_lds_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'volumes',
    timestamps: false
  });
};
