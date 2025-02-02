import UserProperty from "@/types/EntityProperty/UserProperty";
import UserQueryService from "../QueryService/UserQueryService";

export default class GetUserUseCase {
	private _userQueryService: UserQueryService;

	constructor(
		userQueryService: UserQueryService
	) {
		this._userQueryService = userQueryService;
	}

	public execute = async (): Promise<UserProperty[] | undefined> => {
		try {
			const users: UserProperty[] = await this._userQueryService.getAllUsers();
			return users;
		} catch (error) {
			console.error(`[GetUserTestUseCase] Failed to fetch: ${error}`);
			throw new Error("Failed to fetch user");
		}
	};
}