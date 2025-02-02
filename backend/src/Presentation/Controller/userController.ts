import { RequestHandler } from 'express';
import { Request, Response } from 'express';
import GetUserUseCase from '@/Application/UseCase/GetUserUseCase';
import UserProperty from '@/types/EntityProperty/UserProperty';

export default class UserController {
	private _getUserUseCase: GetUserUseCase;

	constructor(
		getUserUseCase: GetUserUseCase
	) {
		this._getUserUseCase = getUserUseCase;
	}

	public test: RequestHandler = async (req: Request, res: Response) => {
		try {
			const users: UserProperty[] | undefined = await this._getUserUseCase.execute();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json({ error: 'An error occurred' });
		}
	};
}