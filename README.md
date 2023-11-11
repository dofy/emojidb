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

- Copy any `dfXXX.ts` under the `lib/formators` folder
- Modify the content in the `output` method, process the content of `data` to return the required format
- Register this `Formator` in `lib/Formator.ts`
  - Import the file `import dfXXX from './formators/dfXXX'`
  - Add the new format to the `types` array
- The help content and format support will be completed automatically

> _Tips:_
>
> Refer to the `data` structure `./templates/template.json` file

## Appendix:

- Data source: https://www.unicode.org/Public/emoji
