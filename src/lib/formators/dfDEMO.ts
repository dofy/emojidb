import { type DataType } from '../Formator'

const output = async (_data: DataType): Promise<string> => {
  if (Math.random() > 0.5) throw new Error('Demo Random Error!')
  else return 'this is a Formator Demo...'
}

export default output
