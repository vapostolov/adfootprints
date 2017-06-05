/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_creatives_clickthrus', {
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
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    tableName: 'campaigns_creatives_clickthrus'
  });
};
