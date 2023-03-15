interface DataType {
  version: string
  emojis: Array<{
    group: string
    subgroup: string
    codepoints: string
    status: string
    emoji: string
    name: string
    keywords: string
  }>
}
