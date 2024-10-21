import express from 'express';
import { getAllCategories } from '../controllers/categoryController.js';
import verifyJWT from '../middleware/verifyJwt.js';

const categoryRouter = express.Router();


categoryRouter.get('/', getAllCategories)

export default categoryRouter;