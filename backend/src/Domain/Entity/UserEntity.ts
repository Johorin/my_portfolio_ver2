export default class UserEntity {
	private _id: number;
	private _email: string;
	private _name: string | null;

	constructor(
		id: number,
		email: string,
		name: string | null
	) {
		this._id    = id;
		this._email = email;
		this._name  = name;
	}

	public getId = (): number => {
		return this._id;
	};

	public getEmail = (): string => {
		return this._email;
	};

	public getName = (): string | null => {
		return this._name;
	};
}