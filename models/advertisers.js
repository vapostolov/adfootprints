/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('advertisers', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_im: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    billing_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    billing_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    billing_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    billing_im: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    publishers_ids: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'advertisers'
  });
};
