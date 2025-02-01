import express from 'express';
import { test } from '../src/Presentation/Controller/userController';

export const usersRouter = express.Router();

usersRouter.get('/test', test);
