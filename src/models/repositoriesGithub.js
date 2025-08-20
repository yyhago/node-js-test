const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

class Repository extends Model {}

Repository.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O nome do repositório é obrigatório" },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: { msg: "A URL do repositório deve ser válida" },
      },
    },
    updatedAtGitHub: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "projects",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Repository",
    tableName: "repositories",
    timestamps: true,
  }
);

module.exports = Repository;