class DataFormator {
  constructor(data) {
    this._data = data;
  }

  get output() {
    return this._data;
  }
}

module.exports = DataFormator
