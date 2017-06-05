/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_tokens', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    api_client_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'api_tokens'
  });
};
