# Emoji Database

生成多种格式 Emoji 数据

`Emoji Version:` `15.0`

## How to use:

```bash
# - CLONE PROJECT
# init
npm install
npm link

# OR

# - INSTALL NPM
npm install -g @dofy/emojidb
# or
yarn global add @dofy/emojidb

# run
emojidb -t json -f yahaha

# help
emojidb --help
```

## Extend:

- 复制 `lib/formators` 文件夹下任何一个 `dfXXX.ts`
- 修改 `output` 方法中的内容，处理 `data` 内容使其返回需要的格式
- 在 `lib/Formator.ts` 中注册该 `Formator`
  - 引入文件 `import dfXXX from './formators/dfXXX'`
  - 將新格式加入 `types` 數組中
- 帮助内容与格式支持都会自动完成

> _Tips:_ 
>
> `data` 结构参考 `./templates/template.json` 文件

## 附：

- 数据来源： https://www.unicode.org/Public/emoji
- 数据文件： https://www.unicode.org/Public/emoji/15.0/emoji-test.txt
