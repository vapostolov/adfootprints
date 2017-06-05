/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ci_sessions', {
    session_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    ip_address: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: '0'
    },
    user_agent: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    last_activity: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    user_data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'ci_sessions'
  });
};
