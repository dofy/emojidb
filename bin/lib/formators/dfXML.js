"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml2js_1 = require("xml2js");
const output = async (data) => {
    const builder = new xml2js_1.Builder();
    return builder.buildObject(data);
};
exports.default = output;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZYTUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm1hdG9ycy9kZlhNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFnQztBQUVoQyxNQUFNLE1BQU0sR0FBRyxLQUFLLEVBQUUsSUFBYyxFQUFtQixFQUFFO0lBQ3ZELE1BQU0sT0FBTyxHQUFHLElBQUksZ0JBQU8sRUFBRSxDQUFBO0lBQzdCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNsQyxDQUFDLENBQUE7QUFFRCxrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAneG1sMmpzJ1xuXG5jb25zdCBvdXRwdXQgPSBhc3luYyAoZGF0YTogRGF0YVR5cGUpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICBjb25zdCBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKVxuICByZXR1cm4gYnVpbGRlci5idWlsZE9iamVjdChkYXRhKVxufVxuXG5leHBvcnQgZGVmYXVsdCBvdXRwdXRcbiJdfQ==