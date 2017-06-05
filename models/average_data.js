/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('average_data', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    keyword: {
      type: DataTypes.STRING(255),
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
    dwell_avg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    video_starts_avg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    time_spent_open_avg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    video_ends_avg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    first_interaction_avg: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'average_data'
  });
};
