import { CSVReader } from './CSVReader'

const assetPath = './asset/football.csv'
const csvReader = new CSVReader(assetPath)
csvReader.read()
const matches = csvReader.data


/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won, 
 */

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

const teamName = 'Man United'

let manUnitedWins = 0

for (let match of matches) {
  if (match[1] === teamName && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === teamName && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)
