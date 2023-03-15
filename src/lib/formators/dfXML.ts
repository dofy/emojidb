import { Builder } from 'xml2js'

const output = async (data: DataType): Promise<string> => {
  const builder = new Builder()
  return builder.buildObject(data)
}

export default output
