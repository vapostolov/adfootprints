/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invalidations_queue', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    flag: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    paths: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creation_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    execution_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'invalidations_queue'
  });
};
