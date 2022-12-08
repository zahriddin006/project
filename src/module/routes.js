import { Router } from "express";
import authRoutes from './auth/routes.js'
import productsRoutes from './products/routes.js'
const router = Router();

export default router
.use('/auth', authRoutes)
.use('/api', productsRoutes)