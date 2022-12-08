import { Router } from "express";
import authController from './auth.js'
import { Login, Register } from "../../validation/login.validation.js";
import validation from "../../middleware/validation.js"
const authRoutes = Router();

export default authRoutes
  .post('/login', validation(Login), authController.LOGIN)
  .post('/register', validation(Register), authController.REGISTER)
  .delete('/delete/:id', authController.DEL_USER)