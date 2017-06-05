/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fleets', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    advertiser_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ctr: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    itr: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    official_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_interaction_rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    video_start_rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    video_end_rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    live_startdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    live_enddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'fleets'
  });
};
