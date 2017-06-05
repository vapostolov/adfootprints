/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simpleadswizard_saves', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'simpleadswizard_saves'
  });
};
