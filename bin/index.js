#!/usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const readline_1 = require("readline");
const path_1 = require("path");
const helpers_1 = require("yargs/helpers");
const yargs_1 = __importDefault(require("yargs/yargs"));
const axios_1 = __importDefault(require("axios"));
const Formator_1 = require("./lib/Formator");
const parser = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .help('h')
    .alias('h', 'help')
    .alias('v', 'version')
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
const emojiVersion = '15.0';
const defaultSource = '../source/emoji-test.txt';
void (() => __awaiter(void 0, void 0, void 0, function* () {
    const argv = yield parser.argv;
    console.log('......', argv);
    const source = argv.source === 'DS' ? (0, path_1.join)(__dirname, defaultSource) : argv.source;
    const output = `${argv.file}.${argv.type}`;
    let stream;
    if (/^https?:\/\//.test(source)) {
        console.log('🕖', `Loading... (${source})`);
        const response = yield axios_1.default
            .get(source, {
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
            }
        })
            .catch((err) => {
            console.error('⚠️ ', err.message);
            process.exit(1);
        });
        stream = response.data;
    }
    else {
        stream = (0, fs_1.createReadStream)(source);
    }
    stream.on('error', (err) => {
        console.error('⚠️ ', err.message);
        process.exit(1);
    });
    stream.on('open', () => {
        // console.log('BEGIN!');
    });
    const rl = (0, readline_1.createInterface)({ input: stream });
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
        (0, Formator_1.format)(data, argv.type)
            .then((result) => {
            (0, fs_1.writeFile)(output, result, (err) => {
                if (err != null) {
                    console.error('⚠️', err.message);
                }
                else {
                    console.log('✌️', `️Please run \`open "${output}"\` to check the output.`);
                }
            });
        })
            .catch((err) => {
            console.error('⚠️ ', err.message);
        });
    });
}))();
const getKeyWords = (group, subgroup, name) => {
    const separator = /[\s&\-:]+/;
    let keywords = [];
    name = name.replace(/[()]/g, '');
    keywords = keywords.concat(group.toLowerCase().split(separator));
    keywords = keywords.concat(subgroup.toLowerCase().split(separator));
    keywords = keywords.concat(name.toLowerCase().split(separator));
    return Array.from(new Set(keywords)).join();
};
