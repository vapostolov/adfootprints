/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_creatives_customstats', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    start_eventtype: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    start_eventname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_eventtype: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    end_eventname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    min_eventtime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    max_eventtime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'campaigns_creatives_customstats'
  });
};
