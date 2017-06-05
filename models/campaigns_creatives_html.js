/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_creatives_html', {
    creative_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    html5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    only_scripts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    only_html: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'campaigns_creatives_html'
  });
};
