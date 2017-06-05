/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('links', {
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
    link_type: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    redirect_url: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    tableName: 'links'
  });
};
