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
const format = (data, type) => {
    switch (type) {
        case 'csv':
            return (0, dfCSV_1.default)(data);
        case 'json':
            return (0, dfJSON_1.default)(data);
        case 'sql':
            return (0, dfSQL_1.default)(data);
        case 'xml':
            return (0, dfXML_1.default)(data);
        default:
            return (0, dfDEMO_1.default)(data);
    }
};
exports.format = format;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL0Zvcm1hdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUFxQztBQUNyQyw4REFBbUM7QUFDbkMsZ0VBQXFDO0FBQ3JDLDhEQUFtQztBQUNuQyw4REFBbUM7QUFFbkMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFpQmxDLHNCQUFLO0FBZnRCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBYyxFQUFFLElBQVksRUFBVSxFQUFFO0lBQ3RELFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxLQUFLO1lBQ1IsT0FBTyxJQUFBLGVBQUcsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQixLQUFLLE1BQU07WUFDVCxPQUFPLElBQUEsZ0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixLQUFLLEtBQUs7WUFDUixPQUFPLElBQUEsZUFBRyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLEtBQUssS0FBSztZQUNSLE9BQU8sSUFBQSxlQUFHLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEI7WUFDRSxPQUFPLElBQUEsZ0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtLQUNwQjtBQUNILENBQUMsQ0FBQTtBQUVRLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlbW8gZnJvbSAnLi9mb3JtYXRvcnMvZGZERU1PJ1xuaW1wb3J0IGNzdiBmcm9tICcuL2Zvcm1hdG9ycy9kZkNTVidcbmltcG9ydCBqc29uIGZyb20gJy4vZm9ybWF0b3JzL2RmSlNPTidcbmltcG9ydCBzcWwgZnJvbSAnLi9mb3JtYXRvcnMvZGZTUUwnXG5pbXBvcnQgeG1sIGZyb20gJy4vZm9ybWF0b3JzL2RmWE1MJ1xuXG5jb25zdCB0eXBlcyA9IFsnZGVtbycsICdjc3YnLCAnanNvbicsICdzcWwnLCAneG1sJ11cblxuY29uc3QgZm9ybWF0ID0gKGRhdGE6IERhdGFUeXBlLCB0eXBlOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjc3YnOlxuICAgICAgcmV0dXJuIGNzdihkYXRhKVxuICAgIGNhc2UgJ2pzb24nOlxuICAgICAgcmV0dXJuIGpzb24oZGF0YSlcbiAgICBjYXNlICdzcWwnOlxuICAgICAgcmV0dXJuIHNxbChkYXRhKVxuICAgIGNhc2UgJ3htbCc6XG4gICAgICByZXR1cm4geG1sKGRhdGEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkZW1vKGRhdGEpXG4gIH1cbn1cblxuZXhwb3J0IHsgZm9ybWF0LCB0eXBlcyB9XG4iXX0=