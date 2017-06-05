/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publishers_placements', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
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
    width: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    }
  }, {
    tableName: 'publishers_placements'
  });
};
