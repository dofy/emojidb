import demo from './formators/dfDEMO'
import csv from './formators/dfCSV'
import json from './formators/dfJSON'
import sql from './formators/dfSQL'
import xml from './formators/dfXML'

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

export { format, types }
