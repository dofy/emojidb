"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.format = void 0;
const dfDEMO_1 = __importDefault(require("./formators/dfDEMO"));
const dfCSV_1 = __importDefault(require("./formators/dfCSV"));
const dfJSON_1 = __importDefault(require("./formators/dfJSON"));
const dfSQL_1 = __importDefault(require("./formators/dfSQL"));
const dfXML_1 = __importDefault(require("./formators/dfXML"));
const types = ['demo', 'csv', 'json', 'sql', 'xml'];
exports.types = types;
const format = async (data, type) => {
    switch (type) {
        case 'csv':
            return await (0, dfCSV_1.default)(data);
        case 'json':
            return await (0, dfJSON_1.default)(data);
        case 'sql':
            return await (0, dfSQL_1.default)(data);
        case 'xml':
            return await (0, dfXML_1.default)(data);
        default:
            return await (0, dfDEMO_1.default)(data);
    }
};
exports.format = format;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL0Zvcm1hdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUFxQztBQUNyQyw4REFBbUM7QUFDbkMsZ0VBQXFDO0FBQ3JDLDhEQUFtQztBQUNuQyw4REFBbUM7QUFFbkMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFpQmxDLHNCQUFLO0FBZnRCLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxJQUFjLEVBQUUsSUFBWSxFQUFtQixFQUFFO0lBQ3JFLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxLQUFLO1lBQ1IsT0FBTyxNQUFNLElBQUEsZUFBRyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLEtBQUssTUFBTTtZQUNULE9BQU8sTUFBTSxJQUFBLGdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsS0FBSyxLQUFLO1lBQ1IsT0FBTyxNQUFNLElBQUEsZUFBRyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3hCLEtBQUssS0FBSztZQUNSLE9BQU8sTUFBTSxJQUFBLGVBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUN4QjtZQUNFLE9BQU8sTUFBTSxJQUFBLGdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUE7S0FDMUI7QUFDSCxDQUFDLENBQUE7QUFFUSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZW1vIGZyb20gJy4vZm9ybWF0b3JzL2RmREVNTydcbmltcG9ydCBjc3YgZnJvbSAnLi9mb3JtYXRvcnMvZGZDU1YnXG5pbXBvcnQganNvbiBmcm9tICcuL2Zvcm1hdG9ycy9kZkpTT04nXG5pbXBvcnQgc3FsIGZyb20gJy4vZm9ybWF0b3JzL2RmU1FMJ1xuaW1wb3J0IHhtbCBmcm9tICcuL2Zvcm1hdG9ycy9kZlhNTCdcblxuY29uc3QgdHlwZXMgPSBbJ2RlbW8nLCAnY3N2JywgJ2pzb24nLCAnc3FsJywgJ3htbCddXG5cbmNvbnN0IGZvcm1hdCA9IGFzeW5jIChkYXRhOiBEYXRhVHlwZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnY3N2JzpcbiAgICAgIHJldHVybiBhd2FpdCBjc3YoZGF0YSlcbiAgICBjYXNlICdqc29uJzpcbiAgICAgIHJldHVybiBhd2FpdCBqc29uKGRhdGEpXG4gICAgY2FzZSAnc3FsJzpcbiAgICAgIHJldHVybiBhd2FpdCBzcWwoZGF0YSlcbiAgICBjYXNlICd4bWwnOlxuICAgICAgcmV0dXJuIGF3YWl0IHhtbChkYXRhKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYXdhaXQgZGVtbyhkYXRhKVxuICB9XG59XG5cbmV4cG9ydCB7IGZvcm1hdCwgdHlwZXMgfVxuIl19