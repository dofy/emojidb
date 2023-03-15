"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const output = (data) => {
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
};
exports.default = output;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZTUUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2Zvcm1hdG9ycy9kZlNRTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBYyxFQUFVLEVBQUU7SUFDeEMsTUFBTSxHQUFHLEdBQUc7UUFDVixpQ0FBaUM7UUFDakM7OztPQUdHO0tBQ0osQ0FBQTtJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDM0IsR0FBRyxDQUFDLElBQUksQ0FDTiwwQ0FBMEMsSUFBSSxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsUUFBUSxPQUFPLElBQUksQ0FBQyxVQUFVLE9BQU8sSUFBSSxDQUFDLE1BQU0sT0FBTyxJQUFJLENBQUMsS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUMzSyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsTUFBTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3V0cHV0ID0gKGRhdGE6IERhdGFUeXBlKTogc3RyaW5nID0+IHtcbiAgY29uc3Qgc3FsID0gW1xuICAgICdEUk9QIFRBQkxFIElGIEVYSVNUUyBgZW1vamlkYmA7JyxcbiAgICBgQ1JFQVRFIFRBQkxFIFxcYGVtb2ppZGJcXGAgKGlkIGludGVnZXIgUFJJTUFSWSBLRVkgYXV0b2luY3JlbWVudCxcbiAgICAgIFxcYGdyb3VwXFxgIHRleHQsIFxcYHN1Ymdyb3VwXFxgIHRleHQsIFxcYGNvZGVwb2ludHNcXGAgdGV4dCwgXFxgc3RhdHVzXFxgIHRleHQsXG4gICAgICBcXGBlbW9qaVxcYCB0ZXh0LCBcXGBuYW1lXFxgIHRleHQsIFxcYGtleXdvcmRzXFxgIHRleHQpO1xuICAgICAgYFxuICBdXG5cbiAgZGF0YS5lbW9qaXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIHNxbC5wdXNoKFxuICAgICAgYElOU0VSVCBJTlRPIFxcYGVtb2ppZGJcXGAgVkFMVUVTIChudWxsLCAnJHtpdGVtLmdyb3VwfScsICcke2l0ZW0uc3ViZ3JvdXB9JywgJyR7aXRlbS5jb2RlcG9pbnRzfScsICcke2l0ZW0uc3RhdHVzfScsICcke2l0ZW0uZW1vaml9JywgJyR7aXRlbS5uYW1lfScsICcke2l0ZW0ua2V5d29yZHN9Jyk7YFxuICAgIClcbiAgfSlcblxuICByZXR1cm4gc3FsLmpvaW4oJ1xcbicpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG91dHB1dFxuIl19