// inheritence pattern
// import { MatchReader } from './inheritence/MatchReader'

// interface composition pattern
import { CSVReader } from './composition/CSVReader'
import { MatchReader } from './composition/MatchReader'
import { MatchResult } from './MatchResult'

const assetPath = './asset/football.csv'

// inheritence pattern
// const matchReader = new MatchReader(assetPath)
// matchReader.read()

// interface pattern
const matchReader = new MatchReader(new CSVReader(assetPath))
matchReader.load()

/**
 * e.g. [ '28/10/2018', 'Man United', 'Everton', '2', '1', 'H', 'J Moss' ]
 * date, home team, away team, , , which won, 
 */
const teamName = 'Man United'

let manUnitedWins = 0

// inheritence pattern
// const matches = matchReader.data

// interface pattern
const matches = matchReader.matches

for (let match of matches) {
  if (match[1] === teamName && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === teamName && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United wins ${manUnitedWins} times`)
