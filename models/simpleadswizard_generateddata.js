/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simpleadswizard_generateddata', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creative_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'simpleadswizard_generateddata'
  });
};
