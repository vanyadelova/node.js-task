const Sequelize = require("sequelize");
const sequelize = require("../db");
const Ship = require("../ships/model");
const User = require("../users/model");

const Shipyard = sequelize.define(
  "shipyards",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "shipyard_name"
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "user_id"
    }
  },
  {
    tableName: "shipyards",
    timestamps: false
  }
);

Shipyard.belongsTo(User);
Shipyard.hasMany(Ship);

module.exports = Shipyard;
