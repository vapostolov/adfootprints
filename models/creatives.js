/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creatives', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mute_sound_on_load: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    backup_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    banner_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    banner_size_w: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    banner_size_h: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    banner_wmode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    banner_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'creatives'
  });
};
