import TestType from "@/types/TestType";

interface UserRepositoryInterface {
	getAllUsersForTest: () => Promise<TestType[] | null>;
}

export default UserRepositoryInterface