"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapper = void 0;
__exportStar(require("./domain"), exports);
__exportStar(require("./typeorm"), exports);
function mapper(target, source) {
    const targetKeys = Object.keys(target);
    const result = Object.keys(source).reduce((acc, sourceKey) => {
        if (targetKeys.some((targetKey) => targetKey === sourceKey)) {
            acc[sourceKey] = source[sourceKey];
        }
        return acc;
    }, target);
    return result;
}
exports.mapper = mapper;
//# sourceMappingURL=index.js.map