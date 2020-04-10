import * as fs from 'fs'

export abstract class CSVReader<DataType> {
  public data: DataType[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): DataType

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'UTF-8'
      })
      .split('\n')
      .map(
        (row: string): string[] =>
          row.split(',')
      ).map(this.mapRow)
  }
}