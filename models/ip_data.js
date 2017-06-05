/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ip_data', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    country_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'ip_data'
  });
};
