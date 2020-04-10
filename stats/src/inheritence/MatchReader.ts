import { CSVReader } from './CSVReader'
import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'
import { strToDate } from '../utils'

export class MatchReader extends CSVReader<MatchData> {
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
}