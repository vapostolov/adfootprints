/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autoreports', {
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
    report_start_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    report_end_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    repeat_period: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    repeat_period_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    repeat_period_number: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    report_parameters: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_report_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    next_report_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cumulative: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'autoreports'
  });
};
