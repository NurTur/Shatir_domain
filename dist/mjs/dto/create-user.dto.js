var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsEmail, IsNotEmpty, MinLength, IsAlpha, IsMobilePhone, MaxLength, IsEnum, } from 'class-validator';
import { I18nContext } from 'nestjs-i18n';
const i18n = I18nContext.current();
export var Language;
(function (Language) {
    Language["KK"] = "kk-KZ";
    Language["RU"] = "ru-RU";
    Language["EN"] = "en-US";
})(Language || (Language = {}));
export class CreateUserDto {
    firstName;
    lastName;
    email;
    password;
    avatar;
    role;
    mobilePhone;
    banned;
    banReason;
    language;
}
__decorate([
    IsString({
        message: `${i18n?.t('exceptions.isString', {
            args: { property: 'firstName' },
        })}`,
    }),
    MinLength(3, {
        message: `${i18n?.t('exceptions.minLength', {
            args: { property: 'firstName', length: 3 },
        })}`,
    }),
    IsAlpha(Language.EN, {
        message: `${i18n?.t('exceptions.containLetters', {
            args: { property: 'firstName' },
        })}`,
    }),
    MaxLength(30, {
        message: `${i18n?.t('exceptions.maxLength', {
            args: { property: 'firstName', length: 30 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    IsString({
        message: `${i18n?.t('exceptions.isString', {
            args: { property: 'lastName' },
        })}`,
    }),
    MinLength(3, {
        message: `${i18n?.t('exceptions.minLength', {
            args: { property: 'lastName', length: 3 },
        })}`,
    }),
    IsAlpha(Language.EN, {
        message: `${i18n?.t('exceptions.containLetters', {
            args: { property: 'lastName' },
        })}`,
    }),
    MaxLength(30, {
        message: `${i18n?.t('exceptions.maxLength', {
            args: { property: 'lastName', length: 30 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    IsNotEmpty({
        message: `${i18n?.t('exceptions.isNotEmpty', {
            args: { property: 'email' },
        })}`,
    }),
    IsEmail({}, {
        message: `${i18n?.t('exceptions.isEmail', {
            args: { property: 'email' },
        })}`,
    }),
    MaxLength(50, {
        message: `${i18n?.t('exceptions.maxLength', {
            args: { property: 'email', length: 50 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    IsNotEmpty({
        message: `${i18n?.t('exceptions.isNotEmpty', {
            args: { property: 'password' },
        })}`,
    }),
    MinLength(8, {
        message: `${i18n?.t('exceptions.minLength', {
            args: { property: 'password', length: 8 },
        })}`,
    }),
    IsString({
        message: `${i18n?.t('exceptions.isString', {
            args: { property: 'password' },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    IsString({
        message: `${i18n?.t('exceptions.isString', {
            args: { property: 'role' },
        })}`,
    }),
    MaxLength(12, {
        message: `${i18n?.t('exceptions.maxLength', {
            args: { property: 'role', length: 12 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    IsMobilePhone(Language.KK, { strictMode: true }, {
        message: `${i18n?.t('exceptions.isMobilePhone', {
            args: { property: 'mobilePhone' },
        })}`,
    }),
    MaxLength(20, {
        message: `${i18n?.t('exceptions.maxLength', {
            args: { property: 'mobilePhone', length: 20 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "mobilePhone", void 0);
__decorate([
    IsEnum(Language, {
        message: `${i18n?.t('exceptions.isEnum', {
            args: { property: 'language' },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "language", void 0);
//# sourceMappingURL=create-user.dto.js.map