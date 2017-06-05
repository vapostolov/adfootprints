/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simpleadswizard_templates', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    section_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    width: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    backupimage_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    listing_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'simpleadswizard_templates'
  });
};
