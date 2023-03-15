'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const dataFormator_1 = __importDefault(require('./dataFormator'))
const xml2js_1 = require('xml2js')
class dfBody extends dataFormator_1.default {
  get output () {
    const builder = new xml2js_1.Builder()
    return builder.buildObject(this.data)
  }
}
exports.default = dfBody
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZYTUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2RmWE1MLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQWdDO0FBQ2hDLG1DQUFpQztBQUVqQyxNQUFNLE1BQU8sU0FBUSxzQkFBRTtJQUNyQixJQUFJLE1BQU07UUFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLGdCQUFPLEVBQUUsQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRjtBQUVELGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBERiBmcm9tICcuL2RhdGFGb3JtYXRvcic7XG5pbXBvcnQgeyBCdWlsZGVyIH0gZnJvbSAneG1sMmpzJztcblxuY2xhc3MgZGZCb2R5IGV4dGVuZHMgREYge1xuICBnZXQgb3V0cHV0KCkge1xuICAgIGNvbnN0IGJ1aWxkZXIgPSBuZXcgQnVpbGRlcigpO1xuICAgIHJldHVybiBidWlsZGVyLmJ1aWxkT2JqZWN0KHRoaXMuZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGZCb2R5O1xuIl19
