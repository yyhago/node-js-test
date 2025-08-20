const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "O titulo da task é obrigatório!" },
        len: {
          args: [3, 100],
          msg: "O titulo deve ter entre 3 a 100 caracteres.",
        },
      },
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("Em progresso", "Concluida", "Pendente"),
      allowNull: false,
      defaultValue: "Pendente",
      validate: {
        isIn: {
          args: [["Em progresso", "Concluida", "Pendente"]],
          msg: "Status inválido",
        },
      },
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
    modelName: "Task",
    tableName: "tasks",
    timestamps: true,
  }
);

module.exports = Task;
