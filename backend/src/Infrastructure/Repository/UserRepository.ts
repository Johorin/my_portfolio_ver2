import prisma from "@/lib/prisma";
import TestType from "@/types/TestType";
import UserRepositoryInterface from "@/Domain/RepositoryInterface/UserRepositoryInterface";

class UserRepository implements UserRepositoryInterface {
	constructor() {
		// 
	}

	public getAllUsersForTest: () => Promise<TestType[] | null> = async () => {
		return await prisma.user.findMany();
	};
}

export default new UserRepository()