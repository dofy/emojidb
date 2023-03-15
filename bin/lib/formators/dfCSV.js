"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_2_csv_1 = require("json-2-csv");
const output = (data) => {
    (0, json_2_csv_1.json2csvAsync)(data.emojis)
        .then((csv) => {
        return csv;
    })
        .catch((err) => {
        console.error(err);
        return err.message;
    });
    return 'unknow error.';
};
exports.default = output;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZDU1YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm1hdG9ycy9kZkNTVi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwQztBQUUxQyxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQWMsRUFBVSxFQUFFO0lBQ3hDLElBQUEsMEJBQWEsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ1osT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFBO0lBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0osT0FBTyxlQUFlLENBQUE7QUFDeEIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsTUFBTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNvbjJjc3ZBc3luYyB9IGZyb20gJ2pzb24tMi1jc3YnXG5cbmNvbnN0IG91dHB1dCA9IChkYXRhOiBEYXRhVHlwZSk6IHN0cmluZyA9PiB7XG4gIGpzb24yY3N2QXN5bmMoZGF0YS5lbW9qaXMpXG4gICAgLnRoZW4oKGNzdikgPT4ge1xuICAgICAgcmV0dXJuIGNzdlxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgcmV0dXJuIGVyci5tZXNzYWdlXG4gICAgfSlcbiAgcmV0dXJuICd1bmtub3cgZXJyb3IuJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdXRwdXRcbiJdfQ==