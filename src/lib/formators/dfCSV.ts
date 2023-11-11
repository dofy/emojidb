import { AsyncParser } from '@json2csv/node'

import { type DataType } from '../Formator'

const output = async (data: DataType): Promise<string> => {
  const parser = new AsyncParser()
  return parser.parse(data.emojis).promise()
}

export default output
