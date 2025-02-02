import { PrismaClient } from "@prisma/client";
import { RequestHandler } from 'express';
import { Request, Response } from 'express';
import TestType from "@/types/TestType";
import { inject } from "inversify";
import { TYPES } from "@/types/RepositoryInterface/types";
import UserRepositoryInterface from "@/Domain/RepositoryInterface/UserRepositoryInterface";

const prisma = new PrismaClient();

export default class UserController {
    private _userRepository: UserRepositoryInterface;

    constructor(
        @inject(TYPES.UserRepositoryInterface) userRepository: UserRepositoryInterface
    ) {
        this._userRepository = userRepository;
    }

    public test: RequestHandler = async (req: Request, res: Response) => {
        try {
            const users: TestType[] | null = await this._userRepository.getAllUsersForTest();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    };
}