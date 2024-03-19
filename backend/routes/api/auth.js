const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../schemas/user");
const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrl.registration
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  validateBody(schemas.verificationSchema),
  ctrl.resendEmail
);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
