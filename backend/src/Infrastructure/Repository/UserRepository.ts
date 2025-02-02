import prisma from "@/lib/prisma";
import UserRepositoryInterface from "@/Domain/RepositoryInterface/UserRepositoryInterface";
import { injectable } from "inversify";
import UserEntity from '@/Domain/Entity/UserEntity';
import UserFactory from "@/Domain/Factory/UserFactory";
import UserProperty from '@/types/EntityProperty/UserProperty';

@injectable()
export default class UserRepository implements UserRepositoryInterface {
	private _userFactory: UserFactory;

	constructor(
		userFactory: UserFactory
	) {
		this._userFactory = userFactory;
	}

	public getAllUsers = async (): Promise<UserEntity[]> => {
		const users: UserProperty[] = await prisma.user.findMany();
		return this._userFactory.create(users);
	};
}