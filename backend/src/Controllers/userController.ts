import { PrismaClient } from "@prisma/client";
import { RequestHandler } from 'express';
// import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const test: RequestHandler = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        // const users = 'テストです';
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
};

// export const test = (_req: Request, res: Response) => {
//     res.send('テストです');
// };
