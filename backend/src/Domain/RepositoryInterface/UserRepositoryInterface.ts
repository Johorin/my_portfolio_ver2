import UserEntity from '@/Domain/Entity/UserEntity';

interface UserRepositoryInterface {
	getAllUsers: () => Promise<UserEntity[]>;
}

export default UserRepositoryInterface