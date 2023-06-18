"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = exports.Language = void 0;
const class_validator_1 = require("class-validator");
const nestjs_i18n_1 = require("nestjs-i18n");
const i18n = nestjs_i18n_1.I18nContext.current();
var Language;
(function (Language) {
    Language["KK"] = "kk-KZ";
    Language["RU"] = "ru-RU";
    Language["EN"] = "en-US";
})(Language = exports.Language || (exports.Language = {}));
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)({
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isString', {
            args: { property: 'firstName' },
        })}`,
    }),
    (0, class_validator_1.MinLength)(3, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.minLength', {
            args: { property: 'firstName', length: 3 },
        })}`,
    }),
    (0, class_validator_1.IsAlpha)(Language.EN, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.containLetters', {
            args: { property: 'firstName' },
        })}`,
    }),
    (0, class_validator_1.MaxLength)(30, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.maxLength', {
            args: { property: 'firstName', length: 30 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isString', {
            args: { property: 'lastName' },
        })}`,
    }),
    (0, class_validator_1.MinLength)(3, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.minLength', {
            args: { property: 'lastName', length: 3 },
        })}`,
    }),
    (0, class_validator_1.IsAlpha)(Language.EN, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.containLetters', {
            args: { property: 'lastName' },
        })}`,
    }),
    (0, class_validator_1.MaxLength)(30, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.maxLength', {
            args: { property: 'lastName', length: 30 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isNotEmpty', {
            args: { property: 'email' },
        })}`,
    }),
    (0, class_validator_1.IsEmail)({}, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isEmail', {
            args: { property: 'email' },
        })}`,
    }),
    (0, class_validator_1.MaxLength)(50, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.maxLength', {
            args: { property: 'email', length: 50 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isNotEmpty', {
            args: { property: 'password' },
        })}`,
    }),
    (0, class_validator_1.MinLength)(8, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.minLength', {
            args: { property: 'password', length: 8 },
        })}`,
    }),
    (0, class_validator_1.IsString)({
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isString', {
            args: { property: 'password' },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isString', {
            args: { property: 'role' },
        })}`,
    }),
    (0, class_validator_1.MaxLength)(12, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.maxLength', {
            args: { property: 'role', length: 12 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsMobilePhone)(Language.KK, { strictMode: true }, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isMobilePhone', {
            args: { property: 'mobilePhone' },
        })}`,
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.maxLength', {
            args: { property: 'mobilePhone', length: 20 },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "mobilePhone", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Language, {
        message: `${i18n === null || i18n === void 0 ? void 0 : i18n.t('exceptions.isEnum', {
            args: { property: 'language' },
        })}`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "language", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map