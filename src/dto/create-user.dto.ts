import {
	IsString,
	IsEmail,
	IsNotEmpty,
	MinLength,
	IsAlpha,
	IsMobilePhone,
	MaxLength,
	IsEnum,
} from 'class-validator';
import text from '~/i18n/exceptions.json';

export enum Language {
	KK = 'kk-KZ',
	RU = 'ru-RU',
	EN = 'en-US',
}

export class CreateUserDto {
	@IsString({ message: text.isString.EN })
	@MinLength(3, { message: text.minLength_2.EN })
	@IsAlpha(Language.EN, { message: text.containLetters.EN })
	@MaxLength(30, { message: text.maxLength.EN })
	firstName: string;

	@IsString({ message: text.isString.EN })
	@MinLength(3, { message: text.minLength_2.EN })
	@IsAlpha(Language.EN, { message: text.containLetters.EN })
	@MaxLength(30, { message: text.maxLength.EN })
	lastName: string;

	@IsNotEmpty({ message: text.isNotEmpty.EN })
	@IsEmail({}, { message: text.isEmail.EN })
	@MaxLength(50, { message: text.maxLength.EN })
	email: string;

	@IsNotEmpty({ message: text.isNotEmpty.EN })
	@MinLength(8, { message: text.minLength_8.EN })
	@IsString({ message: text.isString.EN })
	password: string;

	avatar: string;

	@IsString({ message: text.isString.EN })
	@MaxLength(12, { message: text.maxLength.EN })
	role: string;

	@IsMobilePhone(
		Language.KK,
		{ strictMode: true },
		{ message: text.isMobilePhone.EN },
	)
	@MaxLength(20, { message: text.maxLength.EN })
	mobilePhone: string;

	banned: boolean;

	banReason?: string;

	@IsEnum(Language, { message: text.isEnum.EN })
	language: string;

	// @BelongsToMany(() => Role, () => UserRoles)
	// roles: Role[];
}
