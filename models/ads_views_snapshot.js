/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_views_snapshot', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creative_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    snapshot_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    views: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_mobile: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'ads_views_snapshot'
  });
};
