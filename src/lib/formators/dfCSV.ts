import { json2csvAsync } from 'json-2-csv'

const output = async (data: DataType): Promise<string> => {
  return await json2csvAsync(data.emojis)
}

export default output
