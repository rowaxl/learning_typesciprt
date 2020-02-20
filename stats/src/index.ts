import { CSVReader } from './CSVReader'
import { MatchResult } from './MatchResult'

const assetPath = './asset/football.csv'
const csvReader = new CSVReader(assetPath)
csvReader.read()

/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won, 
 */
const teamName = 'Man United'

let manUnitedWins = 0

for (let match of csvReader.data) {
  if (match[1] === teamName && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === teamName && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)
