import csv from './formators/dfCSV.js'
import demo from './formators/dfDEMO.js'
import json from './formators/dfJSON.js'
import sql from './formators/dfSQL.js'
import xml from './formators/dfXML.js'

interface Emoji {
  group: string
  subgroup: string
  codepoints: string
  status: string
  emoji: string
  name: string
  keywords: string
}
interface DataType {
  version: string
  emojis: Emoji[]
}

const types = ['demo', 'csv', 'json', 'sql', 'xml']

const format = async (data: DataType, type: string): Promise<string> => {
  switch (type) {
    case 'csv':
      return await csv(data)
    case 'json':
      return await json(data)
    case 'sql':
      return await sql(data)
    case 'xml':
      return await xml(data)
    default:
      return await demo(data)
  }
}

export { format, types, type DataType, type Emoji }
