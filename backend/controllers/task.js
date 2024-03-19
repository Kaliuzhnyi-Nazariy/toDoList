const { Todolist } = require("../schemas/task");
const { ctrlWrapper, HttpError } = require("../helpers");

const listOfTasks = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Todolist.find({ owner }).populate("owner", "name email");
  res.json(result);
};

const oneTask = async (req, res) => {
  const { _id: owner } = req.user;
  const { taskId } = req.params;
  const result = await Todolist.findById({ owner, taskId });
  if (!result) {
    HttpError(404);
  }
  res.json(result);
};

const addTask = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Todolist.create({ ...req.body, owner });
  res.status(201).json(result);
};

const delteTask = async (req, res) => {
  const { _id: owner } = req.user;
  const { taskId } = req.params;
  const result = await Todolist.findOneAndDelete({ owner, _id: taskId });
  if (!result) {
    throw HttpError(404, "Not found!");
  }
  res.json(result);
};

const updateTask = async (req, res) => {
  const { _id: owner } = req.user;
  const { taskId } = req.params;
  console.log(taskId);
  const result = await Todolist.findByIdAndUpdate({ owner, taskId }, req.body, {
    new: true,
  });
  res.json(result);
};

const updateSubtitle = async (req, res) => {
  const { _id: owner } = req.user;
  const { taskId } = req.params;
  const result = await Todolist.findByIdAndUpdate({ owner, taskId }, req.body, {
    new: true,
  });
  res.json(result);
};

const updateStatus = async (req, res) => {
  const { _id: owner } = req.user;
  const { taskId } = req.params;
  const result = await Todolist.findByIdAndUpdate({ owner, taskId }, req.body, {
    new: true,
  });
  res.json(result);
};

module.exports = {
  listOfTasks: ctrlWrapper(listOfTasks),
  oneTask: ctrlWrapper(oneTask),
  addTask: ctrlWrapper(addTask),
  delteTask: ctrlWrapper(delteTask),
  updateTask: ctrlWrapper(updateTask),
  updateSubtitle: ctrlWrapper(updateSubtitle),
  updateStatus: ctrlWrapper(updateStatus),
};
