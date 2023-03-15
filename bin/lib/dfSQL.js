'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const dataFormator_1 = __importDefault(require('./dataFormator'))
class dfBody extends dataFormator_1.default {
  get output () {
    const sql = [
      'DROP TABLE IF EXISTS `emojidb`;',
      'CREATE TABLE `emojidb` (id integer PRIMARY KEY autoincrement,\
      `group` text, `subgroup` text, `codepoints` text, `status` text,\
      `emoji` text, `name` text, `keywords` text);'
    ]
    this.data.emojis.forEach((item) => {
      sql.push(`INSERT INTO \`emojidb\` VALUES (null, '${item.group}', '${item.subgroup}', '${item.codepoints}', '${item.status}', '${item.emoji}', '${item.name}', '${item.keywords}');`)
    })
    return sql.join('\n')
  }
}
exports.default = dfBody
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZTUUwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2RmU1FMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0VBQWdDO0FBRWhDLE1BQU0sTUFBTyxTQUFRLHNCQUFFO0lBQ3JCLElBQUksTUFBTTtRQUNSLE1BQU0sR0FBRyxHQUFHO1lBQ1YsaUNBQWlDO1lBQ2pDOzttREFFNkM7U0FDOUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQ04sMENBQTBDLElBQUksQ0FBQyxLQUFLLE9BQU8sSUFBSSxDQUFDLFFBQVEsT0FBTyxJQUFJLENBQUMsVUFBVSxPQUFPLElBQUksQ0FBQyxNQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FDM0ssQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUVELGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBERiBmcm9tICcuL2RhdGFGb3JtYXRvcic7XG5cbmNsYXNzIGRmQm9keSBleHRlbmRzIERGIHtcbiAgZ2V0IG91dHB1dCgpIHtcbiAgICBjb25zdCBzcWwgPSBbXG4gICAgICAnRFJPUCBUQUJMRSBJRiBFWElTVFMgYGVtb2ppZGJgOycsXG4gICAgICAnQ1JFQVRFIFRBQkxFIGBlbW9qaWRiYCAoaWQgaW50ZWdlciBQUklNQVJZIEtFWSBhdXRvaW5jcmVtZW50LFxcXG4gICAgICBgZ3JvdXBgIHRleHQsIGBzdWJncm91cGAgdGV4dCwgYGNvZGVwb2ludHNgIHRleHQsIGBzdGF0dXNgIHRleHQsXFxcbiAgICAgIGBlbW9qaWAgdGV4dCwgYG5hbWVgIHRleHQsIGBrZXl3b3Jkc2AgdGV4dCk7JyxcbiAgICBdO1xuXG4gICAgdGhpcy5kYXRhLmVtb2ppcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBzcWwucHVzaChcbiAgICAgICAgYElOU0VSVCBJTlRPIFxcYGVtb2ppZGJcXGAgVkFMVUVTIChudWxsLCAnJHtpdGVtLmdyb3VwfScsICcke2l0ZW0uc3ViZ3JvdXB9JywgJyR7aXRlbS5jb2RlcG9pbnRzfScsICcke2l0ZW0uc3RhdHVzfScsICcke2l0ZW0uZW1vaml9JywgJyR7aXRlbS5uYW1lfScsICcke2l0ZW0ua2V5d29yZHN9Jyk7YCxcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3FsLmpvaW4oJ1xcbicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRmQm9keTtcbiJdfQ==
