/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_creatives', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    campaign_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mute_on_load: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    backup_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    banner_size_w: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    banner_size_h: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    banner_mode: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    banner_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clicktag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    live: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    default: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    css: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    third_party_imp_tracking: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    keywords: {
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
    serve_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'campaigns_creatives'
  });
};
