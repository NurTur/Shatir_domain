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
import text from '../i18n/exceptions.json';
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
    IsString({ message: text.isString.EN }),
    MinLength(3, { message: text.minLength_2.EN }),
    IsAlpha(Language.EN, { message: text.containLetters.EN }),
    MaxLength(30, { message: text.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    IsString({ message: text.isString.EN }),
    MinLength(3, { message: text.minLength_2.EN }),
    IsAlpha(Language.EN, { message: text.containLetters.EN }),
    MaxLength(30, { message: text.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    IsNotEmpty({ message: text.isNotEmpty.EN }),
    IsEmail({}, { message: text.isEmail.EN }),
    MaxLength(50, { message: text.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    IsNotEmpty({ message: text.isNotEmpty.EN }),
    MinLength(8, { message: text.minLength_8.EN }),
    IsString({ message: text.isString.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    IsString({ message: text.isString.EN }),
    MaxLength(12, { message: text.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    IsMobilePhone(Language.KK, { strictMode: true }, { message: text.isMobilePhone.EN }),
    MaxLength(20, { message: text.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "mobilePhone", void 0);
__decorate([
    IsEnum(Language, { message: text.isEnum.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "language", void 0);
//# sourceMappingURL=create-user.dto.js.map