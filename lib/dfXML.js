const DF = require('./dataFormator');
const xml2js = require('xml2js');

class dfBody extends DF {
  get output() {
    let builder = new xml2js.Builder();
    return builder.buildObject(this._data);
  }
}

module.exports = dfBody;
