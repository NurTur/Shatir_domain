export enum Language {
	KK = 'kk-KZ',
	RU = 'ru-RU',
	EN = 'en-US',
}

export class CreateUserDto {
	firstName!: string;
	lastName!: string;
	email!: string;
	password!: string;
	avatar!: string;
	role!: string;
	mobilePhone!: string;
	banned!: boolean;
	banReason?: string;
	language!: string;
}