import UserProperty from '@/types/EntityProperty/UserProperty';
import UserEntity from '@/Domain/Entity/UserEntity';

export default class UserFactory {
	public create = (args: UserProperty[]): UserEntity[] => {
		// TODO: Create ValueObject and validate value by it
		return args.map((user) => {
			return new UserEntity(
				user['id'],
				user['email'],
				user['name']
			);
		});
	};
}