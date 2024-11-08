import express from 'express';
import { test } from '../src/Controllers/userController';

export const usersRouter = express.Router();

usersRouter.get('/test', test);
