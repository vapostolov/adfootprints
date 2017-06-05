/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_tracks_snapshot', {
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
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    snapshot_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tracks: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    panel: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ads_tracks_snapshot'
  });
};
