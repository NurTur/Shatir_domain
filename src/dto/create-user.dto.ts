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
import { I18nContext } from 'nestjs-i18n';

const i18n = I18nContext.current();
export enum Language {
	KK = 'kk-KZ',
	RU = 'ru-RU',
	EN = 'en-US',
}

export class CreateUserDto {
	@IsString({
		message: `${i18n?.t('exceptions.isString', {
			args: { property: 'firstName' },
		})}`,
	})
	@MinLength(3, {
		message: `${i18n?.t('exceptions.minLength', {
			args: { property: 'firstName', length: 3 },
		})}`,
	})
	@IsAlpha(Language.EN, {
		message: `${i18n?.t('exceptions.containLetters', {
			args: { property: 'firstName' },
		})}`,
	})
	@MaxLength(30, {
		message: `${i18n?.t('exceptions.maxLength', {
			args: { property: 'firstName', length: 30 },
		})}`,
	})
	firstName!: string;

	@IsString({
		message: `${i18n?.t('exceptions.isString', {
			args: { property: 'lastName' },
		})}`,
	})
	@MinLength(3, {
		message: `${i18n?.t('exceptions.minLength', {
			args: { property: 'lastName', length: 3 },
		})}`,
	})
	@IsAlpha(Language.EN, {
		message: `${i18n?.t('exceptions.containLetters', {
			args: { property: 'lastName' },
		})}`,
	})
	@MaxLength(30, {
		message: `${i18n?.t('exceptions.maxLength', {
			args: { property: 'lastName', length: 30 },
		})}`,
	})
	lastName!: string;

	@IsNotEmpty({
		message: `${i18n?.t('exceptions.isNotEmpty', {
			args: { property: 'email' },
		})}`,
	})
	@IsEmail(
		{},
		{
			message: `${i18n?.t('exceptions.isEmail', {
				args: { property: 'email' },
			})}`,
		},
	)
	@MaxLength(50, {
		message: `${i18n?.t('exceptions.maxLength', {
			args: { property: 'email', length: 50 },
		})}`,
	})
	email!: string;

	@IsNotEmpty({
		message: `${i18n?.t('exceptions.isNotEmpty', {
			args: { property: 'password' },
		})}`,
	})
	@MinLength(8, {
		message: `${i18n?.t('exceptions.minLength', {
			args: { property: 'password', length: 8 },
		})}`,
	})
	@IsString({
		message: `${i18n?.t('exceptions.isString', {
			args: { property: 'password' },
		})}`,
	})
	password!: string;

	avatar!: string;

	@IsString({
		message: `${i18n?.t('exceptions.isString', {
			args: { property: 'role' },
		})}`,
	})
	@MaxLength(12, {
		message: `${i18n?.t('exceptions.maxLength', {
			args: { property: 'role', length: 12 },
		})}`,
	})
	role!: string;

	@IsMobilePhone(
		Language.KK,
		{ strictMode: true },
		{
			message: `${i18n?.t('exceptions.isMobilePhone', {
				args: { property: 'mobilePhone' },
			})}`,
		},
	)
	@MaxLength(20, {
		message: `${i18n?.t('exceptions.maxLength', {
			args: { property: 'mobilePhone', length: 20 },
		})}`,
	})
	mobilePhone!: string;

	banned!: boolean;

	banReason?: string;

	@IsEnum(Language, {
		message: `${i18n?.t('exceptions.isEnum', {
			args: { property: 'language' },
		})}`,
	})
	language!: string;

	// @BelongsToMany(() => Role, () => UserRoles)
	// roles: Role[];
}
