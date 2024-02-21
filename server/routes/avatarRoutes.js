import Router from "express";
import { authMiddleware } from "#auth/authMiddleware.js";
import { patchAvatar } from "./indexRoutes/avatarRoutes.js";

const avatar = Router();

avatar.patch("/avatar", authMiddleware, patchAvatar);

export default avatar;
