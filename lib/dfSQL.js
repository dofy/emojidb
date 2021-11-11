const DF = require('./dataFormator');

class dfBody extends DF {
  get output() {
    let sql = [
      'DROP TABLE IF EXISTS `emojidb`;',
      'CREATE TABLE `emojidb` (id integer PRIMARY KEY autoincrement,\
      `group` text, `subgroup` text, `codepoints` text, `status` text,\
      `emoji` text, `name` text, `keywords` text);',
    ];

    this._data.emojis.forEach((item) => {
      sql.push(
        `INSERT INTO \`emojidb\` VALUES (null, '${item.group}', '${item.subgroup}', '${item.codepoints}', '${item.status}', '${item.emoji}', '${item.name}', '${item.keywords}');`,
      );
    });

    return sql.join('\n');
  }
}

module.exports = dfBody;
