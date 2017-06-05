/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_serve_counters', {
    campaign_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    counter: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'campaigns_serve_counters'
  });
};
