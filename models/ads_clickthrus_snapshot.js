/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_clickthrus_snapshot', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clickthru_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    snapshot_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    clickthrus: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    panel: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ads_clickthrus_snapshot'
  });
};
