import demo from './formators/dfDEMO'
import csv from './formators/dfCSV'
import json from './formators/dfJSON'
import sql from './formators/dfSQL'
import xml from './formators/dfXML'

const types = ['demo', 'csv', 'json', 'sql', 'xml']

const format = (data: DataType, type: string): string => {
  switch (type) {
    case 'csv':
      return csv(data)
    case 'json':
      return json(data)
    case 'sql':
      return sql(data)
    case 'xml':
      return xml(data)
    default:
      return demo(data)
  }
}

export { format, types }
