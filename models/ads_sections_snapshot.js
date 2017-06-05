/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ads_sections_snapshot', {
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
    section_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    section_visits: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    snapshot_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'ads_sections_snapshot'
  });
};
