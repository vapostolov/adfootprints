/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_customstats_snapshot', {
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
    snapshot_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'ads_customstats_snapshot'
  });
};
