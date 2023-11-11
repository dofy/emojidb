"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.format = void 0;
const dfCSV_1 = __importDefault(require("./formators/dfCSV"));
const dfDEMO_1 = __importDefault(require("./formators/dfDEMO"));
const dfJSON_1 = __importDefault(require("./formators/dfJSON"));
const dfSQL_1 = __importDefault(require("./formators/dfSQL"));
const dfXML_1 = __importDefault(require("./formators/dfXML"));
const types = ['demo', 'csv', 'json', 'sql', 'xml'];
exports.types = types;
const format = (data, type) => __awaiter(void 0, void 0, void 0, function* () {
    switch (type) {
        case 'csv':
            return yield (0, dfCSV_1.default)(data);
        case 'json':
            return yield (0, dfJSON_1.default)(data);
        case 'sql':
            return yield (0, dfSQL_1.default)(data);
        case 'xml':
            return yield (0, dfXML_1.default)(data);
        default:
            return yield (0, dfDEMO_1.default)(data);
    }
});
exports.format = format;
