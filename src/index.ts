#!/usr/bin/env node

import { createReadStream, writeFile } from 'fs'
import { createInterface } from 'readline'

import { join } from 'path'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'

import { format, types } from './lib/Formator'

const parser = yargs(hideBin(process.argv))
  // .usage('Usage: $0 [options]')
  .option('type', {
    alias: 't',
    describe: 'Output format',
    default: types[0],
    choices: types
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
  .example(
    'emojidb -t xml -f ~/yahaha',
    'This command will output xml file which named "yahaha.xml" in user folder.'
  )
  .example(
    'emojidb -s https://www.unicode.org/Public/emoji/15.0/emoji-test.txt',
    'This command will use the remote url like database source'
  )
  .epilog('copyright (C) 2019-2023 phpz.xyz')

void (async () => {
  const emojiVersion = '15.0'
  const defaultSource = '../source/emoji-test.txt'

  const argv = await parser.argv
  const source =
    argv.source === 'DS' ? join(__dirname, defaultSource) : argv.source
  const output = `${argv.file}.${argv.type}`

  let rl = null

  // if (/^https?:\/\//.test(source)) {
  //   console.log(`Loading... (${source})`);
  //   rl = createInterface({
  //     input: await fetch(source).then((res) => res.body),
  //    });
  // } else {
  const stream = createReadStream(source)
  rl = createInterface({ input: stream })

  stream.on('error', (err) => {
    console.error(err.message)
  })

  stream.on('open', () => {
    // console.log('BEGIN!');
  })
  // }

  const data: DataType = { version: emojiVersion, emojis: [] }

  let curGroup = ''
  let curSubgroup = ''

  rl.on('line', (line) => {
    if (line.charAt(0) === '#') {
      const version = /#\s+version:\s+(.+)/i.exec(line)
      const group = /#\s+group:\s+(.+)/.exec(line)
      const subgroup = /#\s+subgroup:\s+(.+)/.exec(line)
      // version
      if (version != null) {
        data.version = version[1]
      }
      // group
      if (group != null) {
        curGroup = group[1]
      }
      // subgroup
      if (subgroup != null) {
        curSubgroup = subgroup[1]
      }
    } else {
      // emoji
      // # Format: code points; status # emoji name
      //           [1]          [2]      [3]   [4]

      const emojiInfo = /^([\w\s]+?)\s+;\s+([\w-]+)\s+#\s+(\S+)\s+(.+)/.exec(
        line
      )

      emojiInfo != null &&
        data.emojis.push({
          group: curGroup,
          subgroup: curSubgroup,
          codepoints: emojiInfo[1].replace(/\s+/g, ','),
          status: emojiInfo[2],
          emoji: emojiInfo[3],
          name: emojiInfo[4],
          keywords: getKeyWords(curGroup, curSubgroup, emojiInfo[4])
        })
    }
  })
  rl.on('close', () => {
    writeFile(output, format(data, argv.type), (err) => {
      if (err != null) {
        console.error('⚠️ ', err.message)
      } else {
        console.log(`✌️  Please run \`open "${output}"\` to check the output.`)
      }
    })
  })
})()

const getKeyWords = (group: string, subgroup: string, name: string): string => {
  const separator = /[\s&\-:]+/
  let keywords: string[] = []

  name = name.replace(/[()]/g, '')

  keywords = keywords.concat(group.toLowerCase().split(separator))
  keywords = keywords.concat(subgroup.toLowerCase().split(separator))
  keywords = keywords.concat(name.toLowerCase().split(separator))

  return Array.from(new Set(keywords)).join()
}
