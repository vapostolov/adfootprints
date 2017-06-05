/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_activity_views_20160405_20', {
    creative_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    link_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
    is_mobile: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ads_activity_views_20160405_20'
  });
};
