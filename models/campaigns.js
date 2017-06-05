/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns', {
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
    publishers_placement_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    exp_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    exp_end_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    exp_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    exp_end_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    exp_end_number_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    cool_down: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '30'
    },
    date_stopped: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_started: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_trackable: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    progress: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    fleet_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_archive: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
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
    }
  }, {
    tableName: 'campaigns'
  });
};
