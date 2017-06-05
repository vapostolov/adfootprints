/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_rules_methods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rule: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parameters: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'campaigns_rules_methods'
  });
};
