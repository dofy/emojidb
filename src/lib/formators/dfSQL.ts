import { type DataType, type Emoji } from '../Formator'

const output = async (data: DataType): Promise<string> => {
  const sql = [
    'DROP TABLE IF EXISTS `emojidb`;',
    `CREATE TABLE \`emojidb\` (id integer PRIMARY KEY autoincrement,
      \`group\` text, \`subgroup\` text, \`codepoints\` text, \`status\` text,
      \`emoji\` text, \`name\` text, \`keywords\` text);
      `
  ]

  data.emojis.forEach((item: Emoji) => {
    sql.push(
      `INSERT INTO \`emojidb\` VALUES (null, '${item.group}', '${item.subgroup}', '${item.codepoints}', '${item.status}', '${item.emoji}', '${item.name}', '${item.keywords}');`
    )
  })

  return sql.join('\n')
}

export default output
