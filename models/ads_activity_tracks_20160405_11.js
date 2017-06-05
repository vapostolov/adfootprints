/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_activity_tracks_20160405_11', {
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
      allowNull: true
    },
    activity_timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    activity_ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activity_user_agent: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    unique_code: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    panel: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ads_activity_tracks_20160405_11'
  });
};
