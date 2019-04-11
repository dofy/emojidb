const DF = require('./dataFormator');
const json2csv = require('json2csv');

class dfBody extends DF {
  get output() {
    let parser = new json2csv.Parser();
    return parser.parse(this._data.emojis);
  }
}

module.exports = dfBody;
