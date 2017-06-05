/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_monitors', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    campaign_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    percent: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'campaigns_monitors'
  });
};
