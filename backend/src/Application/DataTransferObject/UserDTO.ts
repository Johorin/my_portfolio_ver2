import UserEntity from "@/Domain/Entity/UserEntity";
import UserProperty from "@/types/EntityProperty/UserProperty";

export default class UserDTO {
	public toObject = (userEntity: UserEntity): UserProperty => {
		return {
			id: userEntity.getId(),
			email: userEntity.getEmail(),
			name: userEntity.getName(),
		};
	};
}