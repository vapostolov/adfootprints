/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_log', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    info: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'users_log'
  });
};
