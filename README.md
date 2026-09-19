# Emoji Database

Generate Emoji data in multiple formats

## How to use:

```bash
npm install -g @dofy/emojidb
# or
yarn global add @dofy/emojidb

# run
emojidb -t json -f yahaha

# help
emojidb --help
```

## Extend:

- Copy any `dfXXX.ts` under the `src/lib/formators` folder
- Modify the content in the `output` method, process the content of `data` to return the required format
- Register this `Formator` in `src/lib/Formator.ts`
  - Import the file `import dfXXX from './formators/dfXXX.js'` — the `.js`
    extension is required, this is ESM (`"type": "module"`) with
    `moduleResolution: nodenext`
  - Add the new format to the `types` array
- The help content and format support will be completed automatically
- Run `yarn build` to compile `src/` into `bin/`

> _Tips:_
>
> Refer to the `data` structure `./templates/template.json` file

## Appendix:

- Data source: https://www.unicode.org/Public/emoji
- Defaults to `emoji/latest/emoji-test.txt`, currently **Emoji 18.0**. Pin a
  specific release with `-s https://www.unicode.org/Public/emoji/16.0/emoji-test.txt`,
  or pass a local file path to the same option.
- Requires Node.js 18 or newer (uses the built-in `fetch`).
