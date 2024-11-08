// @see: https://github.com/prisma/prisma-examples/blob/latest/databases/prisma-postgres/src/queries.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
    // const user1 = await prisma.user.create({
    //     data: {
    //         email: 'alice@test.com',
    //         name: 'Alice',
    //         posts: {
    //             create: {
    //                 title: 'Join the Prisma community on Discord',
    //                 content: 'https://pris.ly/discord',
    //                 published: true,
    //             },
    //         },
    //     },
    //     include: {
    //         posts: true,
    //     },
    // });
    const user1 = await prisma.user.create({
        data: {
            email: 'alice2@test.com',
            name: 'Alice2',
            posts: {
                create: {
                    title: 'Join the Prisma community on Discord',
                    content: 'https://pris.ly/discord',
                    published: true,
                },
            },
        },
        include: {
            posts: true,
        },
    });
    console.log(
        `Created users: ${user1.name} (${user1.posts.length} post)`,
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });