import { PrismaClient } from "@prisma/client";
import { RequestHandler } from 'express';
import { Request, Response } from 'express';
import TestType from "@/types/TestType";

const prisma = new PrismaClient();

class UserController {
    constructor() {
        // 
    }

    public async test(req: Request, res: Response): RequestHandler {
        try {
            const users: TestType[] = await prisma.user.findMany();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    }
}

export default new UserController()