import { type DataType } from '../Formator'

const output = async (data: DataType): Promise<string> => {
  return JSON.stringify(data, null, 2)
}

export default output
