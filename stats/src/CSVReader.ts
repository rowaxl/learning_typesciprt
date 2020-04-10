import * as fs from 'fs'
import { MatchData } from './MatchData'

export abstract class CSVReader {
  public data: MatchData[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData

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