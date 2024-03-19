const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../schemas/task");

const ctrl = require("../../controllers/task");

const router = express.Router();

router.get("/", authenticate, ctrl.listOfTasks);

router.get("/:taskId", authenticate, ctrl.oneTask);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addTask);

router.delete("/:taskId", authenticate, ctrl.delteTask);

router.put(
  "/:taskId",
  authenticate,
  validateBody(schemas.updateTask),
  ctrl.updateTask
);

router.patch(
  "/:taskId/status",
  authenticate,
  validateBody(schemas.updateStatus),
  ctrl.updateSubtitle
);

module.exports = router;
