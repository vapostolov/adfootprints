/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simpleadswizard_sections', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publisher_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'simpleadswizard_sections'
  });
};
