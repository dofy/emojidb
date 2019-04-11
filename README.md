# Emoji Database

生成多种格式 Emoji 数据

`Emoji Version:` `12.0`

## How to use:

```bash
# init
npm install
npm link

# run
emojidb -t json -f yahaha

# help
emojidb -h
```

## Extend:

- 复制 `lib` 文件夹下任何一个 `dfXXX.js`
- 新建一个 `Formator Class`
- 修改 `get output()` 方法中的内容，处理 `this._data` 内容使其返回需要的格式
- 在 `lib/formators.js` 中注册该 `Formator`
- 格式为 `ext: require('./dfXXX')`
- 帮助内容与格式支持都会自动完成

> _Tips:_ 

> `this._data` 结构参考 `./templates/template.json` 文件

## 附：

- 数据来源： https://www.unicode.org/Public/emoji
- 数据文件： https://www.unicode.org/Public/emoji/12.0/emoji-test.txt
