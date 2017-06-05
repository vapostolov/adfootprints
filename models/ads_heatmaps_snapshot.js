/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_heatmaps_snapshot', {
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
    heatmap_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    heatmap_avgtime: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    snapshot_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ads_heatmaps_snapshot'
  });
};
