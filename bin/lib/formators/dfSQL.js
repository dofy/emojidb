"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const output = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = [
        'DROP TABLE IF EXISTS `emojidb`;',
        `CREATE TABLE \`emojidb\` (id integer PRIMARY KEY autoincrement,
      \`group\` text, \`subgroup\` text, \`codepoints\` text, \`status\` text,
      \`emoji\` text, \`name\` text, \`keywords\` text);
      `
    ];
    data.emojis.forEach((item) => {
        sql.push(`INSERT INTO \`emojidb\` VALUES (null, '${item.group}', '${item.subgroup}', '${item.codepoints}', '${item.status}', '${item.emoji}', '${item.name}', '${item.keywords}');`);
    });
    return sql.join('\n');
});
exports.default = output;
