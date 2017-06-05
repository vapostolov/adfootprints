/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats_buffer_views', {
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
    }
  }, {
    tableName: 'stats_buffer_views'
  });
};
