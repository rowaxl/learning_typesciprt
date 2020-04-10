import { DataReader } from './DataReader'
import { MatchResult } from '../MatchResult'
import { strToDate } from '../utils'
import { MatchData } from '../MatchData'


export class MatchReader {
  public matches: MatchData[] = []

  constructor(public reader: DataReader) { }

  load(): void {
    this.reader.read()

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
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
    )
  }
}
