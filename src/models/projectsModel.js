const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O nome do projeto é obrigatório!" },
        len: {
          args: [3, 100],
          msg: "O nome deve ter entre 3 a 100 caracteres.",
        },
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },

  {
    sequelize,
    modelName: "Project",
    tableName: "projects",
    timestamps: true,
  }
);

module.exports = Project;
