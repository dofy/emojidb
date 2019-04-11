const DF = require('./dataFormator');

class dfBody extends DF {
  get output() {
    return JSON.stringify(this._data, null, 2);
  }
}

module.exports = dfBody;
