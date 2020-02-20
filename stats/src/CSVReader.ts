import * as fs from 'fs'
import { strToDate } from './utils'
import { MatchResult } from './MatchResult'
import { MatchData } from './MatchData'
export class CSVReader {
  public data: MatchData[] = []

  constructor(public filename: string) { }

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'UTF-8'
      })
      .split('\n')
      .map((row: string): string[] =>
        row.split(',')
      ).map((row: string[]): MatchData => {
        return [
          strToDate(row[0]).toDateString(),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ]
      })
  }
}