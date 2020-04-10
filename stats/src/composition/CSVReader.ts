import * as fs from 'fs'
import { DataReader } from './DataReader'

export class CSVReader implements DataReader {
  public data: string[][] = []

  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'UTF-8'
      })
      .split('\n')
      .map(
        (row: string): string[] =>
          row.split(',')
      )
  }
}