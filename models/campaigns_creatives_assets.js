/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_creatives_assets', {
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
    file: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'campaigns_creatives_assets'
  });
};
