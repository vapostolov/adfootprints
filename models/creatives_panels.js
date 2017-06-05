/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creatives_panels', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    size_w: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    size_h: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    wmode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    backup_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    position_x: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    position_y: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    visible_on_load: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    close_on_rolloff: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    panel_file: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'creatives_panels'
  });
};
