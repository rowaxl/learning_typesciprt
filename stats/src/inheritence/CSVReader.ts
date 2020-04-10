import * as fs from 'fs'

export abstract class CSVReader<T> {
  public data: T[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

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