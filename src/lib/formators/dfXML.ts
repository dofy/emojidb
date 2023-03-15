import { Builder } from 'xml2js'

const output = (data: DataType): string => {
  const builder = new Builder()
  return builder.buildObject(data)
}

export default output
