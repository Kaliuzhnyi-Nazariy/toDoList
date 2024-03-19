const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongoose } = require("../helpers");

const enumStatus = ["toDo", "inProgress", "done"];

const taskSchema = new Schema(
  {
    task: { type: String, required: true },
    subtitle: { type: String },
    status: { type: String, enum: enumStatus, default: "toDo" },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { varificationKey: false, timestamps: true }
);

const addSchema = Joi.object({
  task: Joi.string().required(),
  subtitle: Joi.string(),
  status: Joi.string().valid(...enumStatus),
});

const updateTask = Joi.object({
  task: Joi.string(),
  subtitle: Joi.string(),
});

const updateStatus = Joi.object({
  status: Joi.string()
    .valid(...enumStatus)
    .required(),
});

const schemas = {
  addSchema,
  updateTask,
  updateStatus,
};

taskSchema.post("save", handleMongoose);

const Todolist = model("todolist", taskSchema);

module.exports = { Todolist, schemas };
