import express from 'express';
import UserController from '@/Presentation/Controller/userController';

export const usersRouter = express.Router();

usersRouter.get('/test', UserController.test);
