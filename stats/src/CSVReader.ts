import * as fs from 'fs'
import { MatchData } from './MatchData'
import { MatchResult } from './MatchResult'
import { strToDate } from './utils'

export class CSVReader {
  public data: MatchData[] = []

  constructor(public filename: string) {}

  mapRow(row: string[]): MatchData {
    return [
      strToDate(row[0]).toDateString(),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
  }

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