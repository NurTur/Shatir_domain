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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = exports.Language = void 0;
const class_validator_1 = require("class-validator");
const exceptions_json_1 = __importDefault(require("../i18n/zapas/exceptions.json"));
var Language;
(function (Language) {
    Language["KK"] = "kk-KZ";
    Language["RU"] = "ru-RU";
    Language["EN"] = "en-US";
})(Language = exports.Language || (exports.Language = {}));
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_json_1.default.isString.EN }),
    (0, class_validator_1.MinLength)(3, { message: exceptions_json_1.default.minLength_2.EN }),
    (0, class_validator_1.IsAlpha)(Language.EN, { message: exceptions_json_1.default.containLetters.EN }),
    (0, class_validator_1.MaxLength)(30, { message: exceptions_json_1.default.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_json_1.default.isString.EN }),
    (0, class_validator_1.MinLength)(3, { message: exceptions_json_1.default.minLength_2.EN }),
    (0, class_validator_1.IsAlpha)(Language.EN, { message: exceptions_json_1.default.containLetters.EN }),
    (0, class_validator_1.MaxLength)(30, { message: exceptions_json_1.default.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: exceptions_json_1.default.isNotEmpty.EN }),
    (0, class_validator_1.IsEmail)({}, { message: exceptions_json_1.default.isEmail.EN }),
    (0, class_validator_1.MaxLength)(50, { message: exceptions_json_1.default.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: exceptions_json_1.default.isNotEmpty.EN }),
    (0, class_validator_1.MinLength)(8, { message: exceptions_json_1.default.minLength_8.EN }),
    (0, class_validator_1.IsString)({ message: exceptions_json_1.default.isString.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_json_1.default.isString.EN }),
    (0, class_validator_1.MaxLength)(12, { message: exceptions_json_1.default.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsMobilePhone)(Language.KK, { strictMode: true }, { message: exceptions_json_1.default.isMobilePhone.EN }),
    (0, class_validator_1.MaxLength)(20, { message: exceptions_json_1.default.maxLength.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "mobilePhone", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Language, { message: exceptions_json_1.default.isEnum.EN }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "language", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map