const DF = require('./dataFormator');

class dfBody extends DF {
  get output() {
    return 'this is a Formator Demo...';
  }
}

module.exports = dfBody;
