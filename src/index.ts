#!/usr/bin/env node

import { readFile, writeFile } from 'fs/promises'
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import { IGNORE_KEYWORDS } from './constants.js'
import { format, types, type DataType } from './lib/Formator.js'

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'

const parser = yargs(hideBin(process.argv))
  .help('h')
  .alias('h', 'help')
  .alias('v', 'version')
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
    default: 'https://www.unicode.org/Public/emoji/latest/emoji-test.txt'
  })
  .example(
    'emojidb -t xml -f ~/yahaha',
    'This command will output xml file which named "yahaha.xml" in user folder.'
  )
  .example(
    'emojidb -s https://www.unicode.org/Public/emoji/16.0/emoji-test.txt',
    'This command will use the remote url like database source'
  )
  .epilog('copyright (C) 2019-2026 phpz.xyz')

// The variable needs the explicit annotation, not just the arrow's return type:
// TS only uses a never-returning call for control flow narrowing when the
// declaration itself is annotated.
const fail: (message: string) => never = (message) => {
  console.error('⚠️ ', message)
  process.exit(1)
}

const getKeyWords = (group: string, subgroup: string, name: string): string => {
  const separator = /[\s&\-:,]+|’s\s*/
  let keywords: string[] = []

  name = name.replace(/[()]/g, '')
  keywords = keywords.concat(group.toLowerCase().split(separator))
  keywords = keywords.concat(subgroup.toLowerCase().split(separator))
  keywords = keywords.concat(name.toLowerCase().split(separator))

  return Array.from(new Set(keywords))
    .filter((keyword) => !IGNORE_KEYWORDS.some((re) => re.test(keyword)))
    .join()
}

// emoji-test.txt is a single ~500KB document, so it is read whole rather than
// streamed: no readline, no stream error plumbing, and no Readable.fromWeb type
// mismatch between the DOM ReadableStream of fetch and node:stream/web.
const load = async (source: string): Promise<string> => {
  if (!/^https?:\/\//.test(source)) {
    return await readFile(source, 'utf8').catch((err: Error) =>
      fail(err.message)
    )
  }

  console.log('🕖', `Loading... (${source})`)

  const response = await fetch(source, {
    headers: { 'User-Agent': USER_AGENT }
  }).catch((err: Error) => fail(err.message))

  // A 4xx/5xx still resolves, so without this the error page would be parsed as
  // emoji data and silently yield an empty result.
  if (!response.ok) {
    fail(`HTTP ${response.status} ${response.statusText} (${source})`)
  }

  return await response.text()
}

const parse = (text: string): DataType => {
  const data: DataType = { version: 'unknown', emojis: [] }

  let curGroup = ''
  let curSubgroup = ''

  for (const line of text.split(/\r?\n/)) {
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

      if (emojiInfo != null) {
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
    }
  }

  return data
}

void (async () => {
  const argv = await parser.argv
  const output = `${argv.file}.${argv.type}`

  const data = parse(await load(argv.source))

  try {
    await writeFile(output, await format(data, argv.type))
  } catch (err) {
    fail((err as Error).message)
  }

  console.log('✌️', `️Please run \`open "${output}"\` to check the output.`)
})()
