/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaigns_demos', {
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
    creative_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ad_position_x: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    ad_position_y: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    background_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    modes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'campaigns_demos'
  });
};
