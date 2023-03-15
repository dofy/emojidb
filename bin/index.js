#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const readline_1 = require("readline");
const path_1 = require("path");
const helpers_1 = require("yargs/helpers");
const yargs_1 = __importDefault(require("yargs/yargs"));
const Formator_1 = require("./lib/Formator");
const parser = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    // .usage('Usage: $0 [options]')
    .option('type', {
    alias: 't',
    describe: 'Output format',
    default: Formator_1.types[0],
    choices: Formator_1.types
})
    .option('file', {
    alias: 'f',
    describe: 'File name',
    default: 'emojidb_result'
})
    .option('source', {
    alias: 's',
    describe: 'emoji-test.txt file or url',
    default: 'DS'
})
    .example('emojidb -t xml -f ~/yahaha', 'This command will output xml file which named "yahaha.xml" in user folder.')
    .example('emojidb -s https://www.unicode.org/Public/emoji/15.0/emoji-test.txt', 'This command will use the remote url like database source')
    .epilog('copyright (C) 2019-2023 phpz.xyz');
void (async () => {
    const emojiVersion = '15.0';
    const defaultSource = '../source/emoji-test.txt';
    const argv = await parser.argv;
    const source = argv.source === 'DS' ? (0, path_1.join)(__dirname, defaultSource) : argv.source;
    const output = `${argv.file}.${argv.type}`;
    let rl = null;
    // if (/^https?:\/\//.test(source)) {
    //   console.log(`Loading... (${source})`);
    //   rl = createInterface({
    //     input: await fetch(source).then((res) => res.body),
    //    });
    // } else {
    const stream = (0, fs_1.createReadStream)(source);
    rl = (0, readline_1.createInterface)({ input: stream });
    stream.on('error', (err) => {
        console.error(err.message);
    });
    stream.on('open', () => {
        // console.log('BEGIN!');
    });
    // }
    const data = { version: emojiVersion, emojis: [] };
    let curGroup = '';
    let curSubgroup = '';
    rl.on('line', (line) => {
        if (line.charAt(0) === '#') {
            const version = /#\s+version:\s+(.+)/i.exec(line);
            const group = /#\s+group:\s+(.+)/.exec(line);
            const subgroup = /#\s+subgroup:\s+(.+)/.exec(line);
            // version
            if (version != null) {
                data.version = version[1];
            }
            // group
            if (group != null) {
                curGroup = group[1];
            }
            // subgroup
            if (subgroup != null) {
                curSubgroup = subgroup[1];
            }
        }
        else {
            // emoji
            // # Format: code points; status # emoji name
            //           [1]          [2]      [3]   [4]
            const emojiInfo = /^([\w\s]+?)\s+;\s+([\w-]+)\s+#\s+(\S+)\s+(.+)/.exec(line);
            emojiInfo != null &&
                data.emojis.push({
                    group: curGroup,
                    subgroup: curSubgroup,
                    codepoints: emojiInfo[1].replace(/\s+/g, ','),
                    status: emojiInfo[2],
                    emoji: emojiInfo[3],
                    name: emojiInfo[4],
                    keywords: getKeyWords(curGroup, curSubgroup, emojiInfo[4])
                });
        }
    });
    rl.on('close', () => {
        (0, fs_1.writeFile)(output, (0, Formator_1.format)(data, argv.type), (err) => {
            if (err != null) {
                console.error('⚠️ ', err.message);
            }
            else {
                console.log(`✌️  Please run \`open "${output}"\` to check the output.`);
            }
        });
    });
})();
const getKeyWords = (group, subgroup, name) => {
    const separator = /[\s&\-:]+/;
    let keywords = [];
    name = name.replace(/[()]/g, '');
    keywords = keywords.concat(group.toLowerCase().split(separator));
    keywords = keywords.concat(subgroup.toLowerCase().split(separator));
    keywords = keywords.concat(name.toLowerCase().split(separator));
    return Array.from(new Set(keywords)).join();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsMkJBQWdEO0FBQ2hELHVDQUEwQztBQUUxQywrQkFBMkI7QUFDM0IsMkNBQXVDO0FBQ3ZDLHdEQUErQjtBQUUvQiw2Q0FBOEM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsSUFBQSxlQUFLLEVBQUMsSUFBQSxpQkFBTyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxnQ0FBZ0M7S0FDL0IsTUFBTSxDQUFDLE1BQU0sRUFBRTtJQUNkLEtBQUssRUFBRSxHQUFHO0lBQ1YsUUFBUSxFQUFFLGVBQWU7SUFDekIsT0FBTyxFQUFFLGdCQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sRUFBRSxnQkFBSztDQUNmLENBQUM7S0FDRCxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ2QsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsV0FBVztJQUNyQixPQUFPLEVBQUUsZ0JBQWdCO0NBQzFCLENBQUM7S0FDRCxNQUFNLENBQUMsUUFBUSxFQUFFO0lBQ2hCLEtBQUssRUFBRSxHQUFHO0lBQ1YsUUFBUSxFQUFFLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUUsSUFBSTtDQUNkLENBQUM7S0FDRCxPQUFPLENBQ04sNEJBQTRCLEVBQzVCLDRFQUE0RSxDQUM3RTtLQUNBLE9BQU8sQ0FDTixxRUFBcUUsRUFDckUsMkRBQTJELENBQzVEO0tBQ0EsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUE7QUFFN0MsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ2YsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFBO0lBQzNCLE1BQU0sYUFBYSxHQUFHLDBCQUEwQixDQUFBO0lBRWhELE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQTtJQUM5QixNQUFNLE1BQU0sR0FDVixJQUFJLENBQUMsTUFBTSxLQUFL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QUUsQ0FBQTtBQUM3QyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmltcG9ydCB7IGNyZWF0ZVJlYWRTdHJlYW0sIHdyaXRlRmlsZSB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHsgY3JlYXRlSW50ZXJmYWNlIH0gZnJvbSAncmVhZGxpbmUnXG5cbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgaGlkZUJpbiB9IGZyb20gJ3lhcmdzL2hlbHBlcnMnXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MveWFyZ3MnXG5cbmltcG9ydCB7IGZvcm1hdCwgdHlwZXMgfSBmcm9tICcuL2xpYi9Gb3JtYXRvcidcblxuY29uc3QgcGFyc2VyID0geWFyZ3MoaGlkZUJpbihwcm9jZXNzLmFyZ3YpKVxuICAvLyAudXNhZ2UoJ1VzYWdlOiAkMCBbb3B0aW9uc10nKVxuICAub3B0aW9uKCd0eXBlJywge1xuICAgIGFsaWFzOiAndCcsXG4gICAgZGVzY3JpYmU6ICdPdXRwdXQgZm9ybWF0JyxcbiAgICBkZWZhdWx0OiB0eXBlc1swXSxcbiAgICBjaG9pY2VzOiB0eXBlc1xuICB9KVxuICAub3B0aW9uKCdmaWxlJywge1xuICAgIGFsaWFzOiAnZicsXG4gICAgZGVzY3JpYmU6ICdGaWxlIG5hbWUnLFxuICAgIGRlZmF1bHQ6ICdlbW9qaWRiX3Jlc3VsdCdcbiAgfSlcbiAgLm9wdGlvbignc291cmNlJywge1xuICAgIGFsaWFzOiAncycsXG4gICAgZGVzY3JpYmU6ICdlbW9qaS10ZXN0LnR4dCBmaWxlIG9yIHVybCcsXG4gICAgZGVmYXVsdDogJ0RTJ1xuICB9KVxuICAuZXhhbXBsZShcbiAgICAnZW1vamlkYiAtdCB4bWwgLWYgfi95YWhhaGEnLFxuICAgICdUaGlzIGNvbW1hbmQgd2lsbCBvdXRwdXQgeG1sIGZpbGUgd2hpY2ggbmFtZWQgXCJ5YWhhaGEueG1sXCIgaW4gdXNlciBmb2xkZXIuJ1xuICApXG4gIC5leGFtcGxlKFxuICAgICdlbW9qaWRiIC1zIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL1B1YmxpYy9lbW9qaS8xNS4wL2Vtb2ppLXRlc3QudHh0JyxcbiAgICAnVGhpcyBjb21tYW5kIHdpbGwgdXNlIHRoZSByZW1vdGUgdXJsIGxpa2UgZGF0YWJhc2Ugc291cmNlJ1xuICApXG4gIC5lcGlsb2coJ2NvcHlyaWdodCAoQykgMjAxOS0yMDIzIHBocHoueHl6Jylcblxudm9pZCAoYXN5bmMgKCkgPT4ge1xuICBjb25zdCBlbW9qaVZlcnNpb24gPSAnMTUuMCdcbiAgY29uc3QgZGVmYXVsdFNvdXJjZSA9ICcuLi9zb3VyY2UvZW1vamktdGVzdC50eHQnXG5cbiAgY29uc3QgYXJndiA9IGF3YWl0IHBhcnNlci5hcmd2XG4gIGNvbnN0IHNvdXJjZSA9XG4gICAgYXJndi5zb3VyY2UgPT09ICdEUycgPyBqb2luKF9fZGlybmFtZSwgZGVmYXVsdFNvdXJjZSkgOiBhcmd2LnNvdXJjZVxuICBjb25zdCBvdXRwdXQgPSBgJHthcmd2LmZpbGV9LiR7YXJndi50eXBlfWBcblxuICBsZXQgcmwgPSBudWxsXG5cbiAgLy8gaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChzb3VyY2UpKSB7XG4gIC8vICAgY29uc29sZS5sb2coYExvYWRpbmcuLi4gKCR7c291cmNlfSlgKTtcbiAgLy8gICBybCA9IGNyZWF0ZUludGVyZmFjZSh7XG4gIC8vICAgICBpbnB1dDogYXdhaXQgZmV0Y2goc291cmNlKS50aGVuKChyZXMpID0+IHJlcy5ib2R5KSxcbiAgLy8gICAgfSk7XG4gIC8vIH0gZWxzZSB7XG4gIGNvbnN0IHN0cmVhbSA9IGNyZWF0ZVJlYWRTdHJlYW0oc291cmNlKVxuICBybCA9IGNyZWF0ZUludGVyZmFjZSh7IGlucHV0OiBzdHJlYW0gfSlcblxuICBzdHJlYW0ub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXG4gIH0pXG5cbiAgc3RyZWFtLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdCRUdJTiEnKTtcbiAgfSlcbiAgLy8gfVxuXG4gIGNvbnN0IGRhdGE6IERhdGFUeXBlID0geyB2ZXJzaW9uOiBlbW9qaVZlcnNpb24sIGVtb2ppczogW10gfVxuXG4gIGxldCBjdXJHcm91cCA9ICcnXG4gIGxldCBjdXJTdWJncm91cCA9ICcnXG5cbiAgcmwub24oJ2xpbmUnLCAobGluZSkgPT4ge1xuICAgIGlmIChsaW5lLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICBjb25zdCB2ZXJzaW9uID0gLyNcXHMrdmVyc2lvbjpcXHMrKC4rKS9pLmV4ZWMobGluZSlcbiAgICAgIGNvbnN0IGdyb3VwID0gLyNcXHMrZ3JvdXA6XFxzKyguKykvLmV4ZWMobGluZSlcbiAgICAgIGNvbnN0IHN1Ymdyb3VwID0gLyNcXHMrc3ViZ3JvdXA6XFxzKyguKykvLmV4ZWMobGluZSlcbiAgICAgIC8vIHZlcnNpb25cbiAgICAgIGlmICh2ZXJzaW9uICE9IG51bGwpIHtcbiAgICAgICAgZGF0YS52ZXJzaW9uID0gdmVyc2lvblsxXVxuICAgICAgfVxuICAgICAgLy8gZ3JvdXBcbiAgICAgIGlmIChncm91cCAhPSBudWxsKSB7XG4gICAgICAgIGN1ckdyb3VwID0gZ3JvdXBbMV1cbiAgICAgIH1cbiAgICAgIC8vIHN1Ymdyb3VwXG4gICAgICBpZiAoc3ViZ3JvdXAgIT0gbnVsbCkge1xuICAgICAgICBjdXJTdWJncm91cCA9IHN1Ymdyb3VwWzFdXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVtb2ppXG4gICAgICAvLyAjIEZvcm1hdDogY29kZSBwb2ludHM7IHN0YXR1cyAjIGVtb2ppIG5hbWVcbiAgICAgIC8vICAgICAgICAgICBbMV0gICAgICAgICAgWzJdICAgICAgWzNdICAgWzRdXG5cbiAgICAgIGNvbnN0IGVtb2ppSW5mbyA9IC9eKFtcXHdcXHNdKz8pXFxzKztcXHMrKFtcXHctXSspXFxzKyNcXHMrKFxcUyspXFxzKyguKykvLmV4ZWMoXG4gICAgICAgIGxpbmVcbiAgICAgIClcblxuICAgICAgZW1vamlJbmZvICE9IG51bGwgJiZcbiAgICAgICAgZGF0YS5lbW9qaXMucHVzaCh7XG4gICAgICAgICAgZ3JvdXA6IGN1ckdyb3VwLFxuICAgICAgICAgIHN1Ymdyb3VwOiBjdXJTdWJncm91cCxcbiAgICAgICAgICBjb2RlcG9pbnRzOiBlbW9qaUluZm9bMV0ucmVwbGFjZSgvXFxzKy9nLCAnLCcpLFxuICAgICAgICAgIHN0YXR1czogZW1vamlJbmZvWzJdLFxuICAgICAgICAgIGVtb2ppOiBlbW9qaUluZm9bM10sXG4gICAgICAgICAgbmFtZTogZW1vamlJbmZvWzRdLFxuICAgICAgICAgIGtleXdvcmRzOiBnZXRLZXlXb3JkcyhjdXJHcm91cCwgY3VyU3ViZ3JvdXAsIGVtb2ppSW5mb1s0XSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH0pXG4gIHJsLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICB3cml0ZUZpbGUob3V0cHV0LCBmb3JtYXQoZGF0YSwgYXJndi50eXBlKSwgKGVycikgPT4ge1xuICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KaoO+4jyAnLCBlcnIubWVzc2FnZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDinIzvuI8gIFBsZWFzZSBydW4gXFxgb3BlbiBcIiR7b3V0cHV0fVwiXFxgIHRvIGNoZWNrIHRoZSBvdXRwdXQuYClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoKVxuXG5jb25zdCBnZXRLZXlXb3JkcyA9IChncm91cDogc3RyaW5nLCBzdWJncm91cDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzZXBhcmF0b3IgPSAvW1xccyZcXC06XSsvXG4gIGxldCBrZXl3b3Jkczogc3RyaW5nW10gPSBbXVxuXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1soKV0vZywgJycpXG5cbiAga2V5d29yZHMgPSBrZXl3b3Jkcy5jb25jYXQoZ3JvdXAudG9Mb3dlckNhc2UoKS5zcGxpdChzZXBhcmF0b3IpKVxuICBrZXl3b3JkcyA9IGtleXdvcmRzLmNvbmNhdChzdWJncm91cC50b0xvd2VyQ2FzZSgpLnNwbGl0KHNlcGFyYXRvcikpXG4gIGtleXdvcmRzID0ga2V5d29yZHMuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdChzZXBhcmF0b3IpKVxuXG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoa2V5d29yZHMpKS5qb2luKClcbn1cbiJdfQ==