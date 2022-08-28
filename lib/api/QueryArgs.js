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
exports.QueryArgs = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class QueryArgs {
    constructor() {
        this.page = 1;
        this.limit = 10;
    }
    get skip() {
        return (this.page - 1) * this.limit;
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (Array.isArray(value)) {
            return [...value.map((item) => item.split(":"))];
        }
        return [value.split(":")];
    }),
    __metadata("design:type", Array)
], QueryArgs.prototype, "sort", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_transformer_1.Type)(() => String),
    (0, class_transformer_1.Transform)(({ value }) => {
        return value.split(",");
    }),
    __metadata("design:type", Array)
], QueryArgs.prototype, "filter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Type)(() => String),
    __metadata("design:type", String)
], QueryArgs.prototype, "search", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], QueryArgs.prototype, "page", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], QueryArgs.prototype, "limit", void 0);
exports.QueryArgs = QueryArgs;
//# sourceMappingURL=QueryArgs.js.map