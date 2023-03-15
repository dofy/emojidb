'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const json_2_csv_1 = require('json-2-csv')
const dataFormator_1 = __importDefault(require('./dataFormator'))
class dfBody extends dataFormator_1.default {
  get output () {
    (0, json_2_csv_1.json2csvAsync)(this.data.emojis)
      .then((csv) => {
        return csv
      })
      .catch((err) => {
        console.error(err)
      })
    return ''
  }
}
exports.default = dfBody
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZDU1YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2RmQ1NWLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLGtFQUFnQztBQUVoQyxNQUFNLE1BQU8sU0FBUSxzQkFBRTtJQUNyQixJQUFJLE1BQU07UUFDUixJQUFBLDBCQUFhLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDNUIsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDWixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGO0FBRUQsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNvbjJjc3ZBc3luYyB9IGZyb20gJ2pzb24tMi1jc3YnO1xuaW1wb3J0IERGIGZyb20gJy4vZGF0YUZvcm1hdG9yJztcblxuY2xhc3MgZGZCb2R5IGV4dGVuZHMgREYge1xuICBnZXQgb3V0cHV0KCkge1xuICAgIGpzb24yY3N2QXN5bmModGhpcy5kYXRhLmVtb2ppcylcbiAgICAgIC50aGVuKChjc3YpID0+IHtcbiAgICAgICAgcmV0dXJuIGNzdjtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGZCb2R5O1xuIl19
