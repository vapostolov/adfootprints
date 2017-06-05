/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simpleadswizard_steps', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ad_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    step: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'simpleadswizard_steps'
  });
};
