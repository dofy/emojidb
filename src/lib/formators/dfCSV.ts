import { json2csvAsync } from 'json-2-csv'

const output = (data: DataType): string => {
  json2csvAsync(data.emojis)
    .then((csv) => {
      return csv
    })
    .catch((err) => {
      console.error(err)
      return err.message
    })
  return 'unknow error.'
}

export default output
