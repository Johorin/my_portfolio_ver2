import { inject } from "inversify";
import { TYPES } from "@/types/RepositoryInterface/types";
import UserRepositoryInterface from "@/Domain/RepositoryInterface/UserRepositoryInterface";
import UserEntity from '@/Domain/Entity/UserEntity';
import UserDTO from "../DataTransferObject/UserDTO";
import UserProperty from "@/types/EntityProperty/UserProperty";

export default class UserQueryService {
	private _userRepository: UserRepositoryInterface;
	private _userDto: UserDTO;

	constructor(
		@inject(TYPES.UserRepositoryInterface) userRepository: UserRepositoryInterface,
		userDto: UserDTO
	) {
		this._userRepository = userRepository;
		this._userDto = userDto;
	}

	public getAllUsers = async (): Promise<UserProperty[]> => {
		const userEntityList: UserEntity[] = await this._userRepository.getAllUsers();
		return userEntityList.map((userEntity) => {
			return this._userDto.toObject(userEntity);
		});
	};
}