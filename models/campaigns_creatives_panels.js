/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_creatives_panels', {
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
    size_w: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    size_h: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    wmode: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    position_type: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    position_x: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    position_y: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    visible_on_load: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    close_on_rolloff: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    file: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    css: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    tableName: 'campaigns_creatives_panels'
  });
};
