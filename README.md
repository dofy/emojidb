# Emoji Database

Generate emoji data from Unicode's `emoji-test.txt` in JSON, CSV, SQLite SQL,
or XML format.

## How to use:

```bash
npm install -g @dofy/emojidb
# or
yarn global add @dofy/emojidb

# run
emojidb -t json -f yahaha

# JSON is the default; CSV, SQL (SQLite) and XML are also available
emojidb -s ./emoji-test.txt -t sql -f emoji

# help
emojidb --help
```

The `-f` option sets the output path without an extension; for example,
`-t json -f yahaha` writes `yahaha.json`. Use `-s` to choose a Unicode
`emoji-test.txt` URL or a local file. Without `-s`, the CLI downloads the
latest Unicode emoji data, so results can change as Unicode updates it.

## Extend:

- Copy any `dfXXX.ts` under the `src/lib/formators` folder
- Modify the content in the `output` method, process the content of `data` to return the required format
- Register this formatter in `src/lib/Formator.ts`
  - Import the file `import dfXXX from './formators/dfXXX.js'` — the `.js`
    extension is required, this is ESM (`"type": "module"`) with
    `moduleResolution: nodenext`
  - Add the new format to the `types` array and a corresponding case in
    the `format` switch
- The new format will appear in the CLI help and accepted choices
- Run `yarn build` to compile `src/` into `bin/`

> _Tips:_
>
> Refer to the `data` structure `./templates/template.json` file

## Appendix:

- Data source: https://www.unicode.org/Public/emoji
- Defaults to `emoji/latest/emoji-test.txt`. Pin a
  specific release with `-s https://www.unicode.org/Public/emoji/16.0/emoji-test.txt`,
  or pass a local file path to the same option.
- Requires Node.js 18 or newer (uses the built-in `fetch`).
- Run `yarn test` to build and exercise the CLI against a local fixture.
