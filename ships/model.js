const Sequelize = require("sequelize");
const sequelize = require("../db");

const Ship = sequelize.define(
  "ships",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "ship_name"
    },

    uid: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "uid_name"
    },

    speed: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "speed_name"
    },
    shipyardId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "shipyard_id"
    }
  },
  {
    tableName: "ships",
    timestamps: false
  }
);

module.exports = Ship;
